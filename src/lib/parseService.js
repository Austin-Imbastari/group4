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
  const Parse = await getParse();
  const results = await new Parse.Query("Event").find();

  return results.map((obj) => {
    const d = obj.toJSON();
    const file = obj.get("image");
    return {
      id: obj.id,
      title: d.title,
      category: d.type,
      host: "Unknown",
      date: d.date,
      time: d.time,
      attendents: 0,
      saved: false,
      price: d.price,
      location: d.location,
      description: d.description,
      picture: file ? file.url() : "",
    };
  });
}
