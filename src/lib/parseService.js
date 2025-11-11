import { getParse } from "./parseClient.js";

export async function createUser({ username, email, password }) {
  const Parse = getParse();
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);
  return user.signUp();
}

export async function getAllEvents() {
  const Parse = getParse();
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  const results = await query.find();
  return results.map(event => event.toJSON());
};