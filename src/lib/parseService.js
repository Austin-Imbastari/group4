import { getParse } from "./parseClient.js";

// Authentication - sign up new user
export async function signUpUser({ username, email, password }) {
  const Parse = await getParse();
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);
  const signedUpUser = await user.signUp();
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

export async function getAllEvents() {
  const Parse = await getParse();
  const results = await new Parse.Query("Event").find();

  return results.map((obj) => {
    const data = obj.toJSON();
    const file = obj.get("image");
    return {
      id: obj.id,
      title: data.title,
      category: data.type,
      host: "Unknown",
      date: data.date,
      time: data.time,
      attendents: 0,
      saved: false,
      price: data.price,
      location: data.location,
      description: data.description,
      picture: file ? file.url() : "",
    };
  });
}

export async function getEventByID(id) {
  const Parse = await getParse();
  const query = new Parse.Query("Event");

  // Fetch the object with this objectId
  const event = await query.get(id);

  const data = event.toJSON();
  const file = event.get("image");

  return {
    id: event.id,
    title: data.title,
    category: data.type,
    host: "Unknown",
    date: data.date,
    time: data.time,
    attendents: 0,
    saved: false,
    price: data.price,
    location: data.location,
    description: data.description,
    picture: file ? file.url() : "",
  };
}

// Create a new event
export async function createEvent(data) {
  const Parse = await getParse();
  const Event = Parse.Object.extend("Event");
  const event = new Event();

  const currentUser = Parse.User.current();
  if (!currentUser) {
    throw new Error("User must be logged in to create an event");
  }
  event.set("host", currentUser);

  for (const [k, v] of Object.entries(data)) {
    if (k !== "image" && v != null) event.set(k, v);
  }

  if (data.image instanceof File) {
    event.set("image", new Parse.File(data.image.name, data.image));
  }

  const saved = await event.save();
  return saved;
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

  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);

  query.equalTo("host", currentUser);
  query.descending("createdAt");

  const results = await query.find();

  return results.map((event) => {
    const data = event.toJSON();
    const file = event.get("image");

    return {
      id: event.id,
      title: data.title,
      category: data.type,
      date: data.date,
      time: data.time,
      price: data.price,
      location: data.location,
      description: data.description,
      picture: file ? file.url() : "",
    };
  });
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
    .map((eventObj) => ({
      id: eventObj.id,
      title: eventObj.get("title"),
      date: eventObj.get("date"),
      location: eventObj.get("location"),
      picture: eventObj.get("picture"),
    }));
}
