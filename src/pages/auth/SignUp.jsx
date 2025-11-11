import { useState } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { User, Mail, Lock } from "lucide-react";
import { getParse } from "../../lib/parseClient";
import { AuthHeader } from "./AuthPageSC";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = form;

    if (!username || !email || !password) {
      console.error("Please fill out all fields.");
      return;
    }

    try {
      const Parse = await getParse();

      const user = new Parse.User();
      user.set("username", username);
      user.set("email", email);
      user.set("password", password);

      await user.signUp();
      setForm({ username: "", email: "", password: "" });
      console.log(" User created with userId:", user);
    } catch (err) {
      console.error("Sign up failed:", err?.message || err);
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
    </>
  );
}
