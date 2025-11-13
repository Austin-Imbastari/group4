import { getParse } from "./parseClient.js";

// Authentication - sign up new user
export async function signUpUser({ username, email, password }) {
  const Parse = await getParse();
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);
  return user.signUp();
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
// Authentication - log in existing user
export async function signInUser({ username, password }) {
  const Parse = await getParse();
  return Parse.User.logIn(username, password);
}

// Authentication - log out the current user
export async function signOutUser() {
  const Parse = await getParse();
  return Parse.User.logOut();
}

// Authentication - get current logged-in user
export async function getCurrentUser() {
  const Parse = await getParse();
  return Parse.User.current();
}

export async function createEvent(data) {
  const Parse = await getParse();

  // 1) make sure no stale token is hanging around
  await Parse.User.logOut().catch(() => {}); // clears bad token in storage

  // 2) ensure a valid session (use your real sign-in if you have one)
  let user = await Parse.User.currentAsync();
  if (!user) {
    const u = new Parse.User();
    u.set("username", `u_${Date.now()}`);
    u.set("password", Math.random().toString(36).slice(2));
    user = await u.signUp(); // fresh valid session
  }

  const Event = Parse.Object.extend("Event");
  const event = new Event();

  // non-file fields
  for (const [k, v] of Object.entries(data)) {
    if (k !== "image" && v != null) event.set(k, v);
  }

  // file field (expects a real File from <input type="file">)
  if (data.image instanceof File) {
    event.set("image", new Parse.File(data.image.name, data.image));
  }

  // 3) save, and if server still says 209, refresh session once and retry
  try {
    return await event.save();
  } catch (err) {
    if (err.code === 209) {
      await Parse.User.logOut();
      const u = new Parse.User();
      u.set("username", `u_${Date.now()}`);
      u.set("password", Math.random().toString(36).slice(2));
      await u.signUp();
      return event.save(); // retry once
    }
    throw err;
  }
}

// export const createEvent = async (data) => {
//   const Parse = await getParse();

//   let current = await Parse.User.currentAsync();
//   if (!current) {
//     const u = new Parse.User();
//     u.set("username", `u_${Date.now()}`);
//     u.set("password", Math.random().toString(36).slice(2));
//     current = await u.signUp();
//   }
//   const Event = Parse.Object.extend("Event");
//   const event = new Event();

//   // set non-file fields
//   for (const [x, y] of Object.entries(data)) {
//     if (x === "image") continue;
//     if (y !== undefined && y !== null) event.set(x, y);
//   }

//   // set file field
//   if (data.image instanceof File) {
//     event.set("image", new Parse.File(data.image.name, data.image));
//   }

//   return event.save();
// };
