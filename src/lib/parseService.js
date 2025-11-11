import { getParse } from "./parseClient.js";

// Authentication - Create User
export async function createUser({ username, email, password }) {
  const Parse = getParse();
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);
  return user.signUp();
}

// Cloud Function - Get User Count
export async function getUserCount() {
  const Parse = getParse();
  return Parse.Cloud.run("countUsers");
}
