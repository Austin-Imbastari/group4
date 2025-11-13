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
