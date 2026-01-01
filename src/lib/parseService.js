import { getParse } from "./parseClient.js";

// Authentication - sign up new user
export async function signUpUser({ username, email, password }) {
  const Parse = await getParse();
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);
  const signedUpUser = await user.signUp();

  // Set public read ACL so host usernames are visible
  const acl = new Parse.ACL(signedUpUser);
  acl.setPublicReadAccess(true);
  signedUpUser.setACL(acl);

  await signedUpUser.save();

  return normalizeUser(signedUpUser);
}

// Authentication - log in existing user
export async function signInUser({ username, password }) {
  const Parse = await getParse();
  const user = await Parse.User.logIn(username, password);
  return normalizeUser(user);
}

// Authentication - log out the current user
export async function signOutUser() {
  const Parse = await getParse();
  return Parse.User.logOut();
}

// Authentication - get current logged-in user
export async function getCurrentUser() {
  const Parse = await getParse();
  return normalizeUser(Parse.User.current());
}

// Authentication - helper function to normalize user object
function normalizeUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    username: user.get("username"),
    email: user.get("email"),
  };
}

// Get current user's name
export async function getCurrentUserName() {
  const currentUser = await getCurrentUser();
  return currentUser ? currentUser.username : null;
}

// Get all events
export async function getAllEvents() {
  const Parse = await getParse();
  const query = new Parse.Query("Event");
  query.include("activityType");
  query.include("host");

  const results = await query.find();
  return results.map(normalizeEvent);
}

// Get event by ID
export async function getEventByID(id) {
  const Parse = await getParse();
  const query = new Parse.Query("Event");
  query.include("activityType");
  query.include("host");

  const event = await query.get(id);
  return normalizeEvent(event);
}

// Create a new event
export async function createEvent(data) {
  const Parse = await getParse();
  const user = Parse.User.current();
  if (!user) throw new Error("User must be logged in to create an event");

  const savedEvent = await Parse.Cloud.run("createEvent", { data });
  return savedEvent;
}

// Toggle attendance for the current user on a specific event
export async function toggleAttendance(eventId) {
  const Parse = await getParse();
  return Parse.Cloud.run("toggleAttendance", { eventId });
}

// Get attendance status for the current user on a specific event
export async function getAttendanceForCurrentUser(eventId) {
  const Parse = await getParse();
  const currentUser = await getCurrentUser();
  if (!currentUser) return false;

  const Attendance = Parse.Object.extend("attendance");
  const query = new Parse.Query(Attendance);
  query.equalTo("user", {
    __type: "Pointer",
    className: "_User",
    objectId: currentUser.id,
  });
  query.equalTo("event", {
    __type: "Pointer",
    className: "Event",
    objectId: eventId,
  });
  const attendance = await query.first();
  return attendance ? attendance.get("isAttending") : false;
}

// Count attendees for a specific event
export async function countAttendeesForEvent(eventId) {
  const Parse = await getParse();
  return await Parse.Cloud.run("countAttendeesForEvent", { eventId });
}

// Get events hosted by the current user
export async function getEventsHostedByCurrentUser() {
  const Parse = await getParse();
  const currentUser = Parse.User.current();
  if (!currentUser) return [];

  const query = new Parse.Query("Event");
  query.equalTo("host", currentUser);
  query.include("activityType");
  query.descending("createdAt");

  const results = await query.find();
  return results.map(normalizeEvent);
}
// Get events the current user is attending
export async function getEventsAttendingByCurrentUser() {
  const Parse = await getParse();
  const currentUser = await getCurrentUser();
  if (!currentUser) throw new Error("Not logged in.");

  const Attendance = Parse.Object.extend("attendance");
  const attendanceQuery = new Parse.Query(Attendance);

  attendanceQuery.equalTo("user", {
    __type: "Pointer",
    className: "_User",
    objectId: currentUser.id,
  });

  attendanceQuery.equalTo("isAttending", true);
  attendanceQuery.include("event");

  const attendanceResults = await attendanceQuery.find();

  return attendanceResults
    .map((record) => record.get("event"))
    .filter(Boolean)
    .map(normalizeEvent);
}

// Get all activity types
export async function getAllActivityTypes() {
  const Parse = await getParse();
  const query = new Parse.Query("ActivityType");
  query.ascending("name");

  const results = await query.find();

  return results
    .map((type) => ({
      id: type.id,
      name: type.get("name"),
      picture: type.get("picture")?.url() || "",
    }))
    .filter((type) => type.name !== "Other");
}

// Helper function to normalize event object
function normalizeEvent(event) {
  const activityType = event.get("activityType");

  return {
    id: event.id,
    title: event.get("title"),
    category: activityType?.get("name") || "Other",
    host: event.get("host")?.get("username") ?? "Unknown",
    date: event.get("date"),
    time: event.get("time"),
    attendees: countAttendeesForEvent(event.id),
    saved: false,
    price: event.get("price"),
    zip: event.get("zip"),
    location: event.get("location"),
    description: event.get("description"),
    picture: activityType?.get("picture")?.url() || "",
  };
}

// Updates an existing Event in Parse by ID with new form data and saves the changes.
export async function updateEvent(eventId, data) {
  const Parse = await getParse();

  const query = new Parse.Query("Event");
  const event = await query.get(eventId);

  for (const [key, value] of Object.entries(data)) {
    if (key !== "image" && value != null) {
      event.set(key, value);
    }
  }

  if (data.image instanceof File) {
    event.set("image", new Parse.File(data.image.name, data.image));
  }

  return await event.save();
}

// Deletes an existing event from Parse by ID
export async function deleteEvent(eventId) {
  const Parse = await getParse();

  const query = new Parse.Query("Event");
  const event = await query.get(eventId);

  return event.destroy();
}
