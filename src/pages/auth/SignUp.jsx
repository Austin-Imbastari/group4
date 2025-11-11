import { useState } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { User, Mail, Lock } from "lucide-react";
import { getParse } from "../../lib/parseClient";
import { AuthHeader, Message } from "./AuthPageSC";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setMessage({ text: "Please fill out all fields.", type: "error" });
      return;
    }

    try {
      const Parse = await getParse();

      const user = new Parse.User();
      user.set("username", form.username);
      user.set("email", form.email);
      user.set("password", form.password);

      await user.signUp();
      setForm({ username: "", email: "", password: "" });
      setMessage({ text: `Welcome, ${form.username}!`, type: "success" });
    } catch (err) {
      setMessage({
        text: "Sign up failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  return (
    <>
      <AuthHeader>
        <h2 className="title">GET STARTED</h2>
        <p className="description">
          Please fill in your credentials to create an account
        </p>
      </AuthHeader>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter your full name"
          icon={User}
        />
        <InputField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          icon={Mail}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          icon={Lock}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {message && <Message type={message.type}>{message.text}</Message>}
    </>
  );
}
