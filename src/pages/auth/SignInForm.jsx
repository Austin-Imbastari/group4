import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { AuthHeader, Message } from "./AuthPageSC";
import LoadingSpinner from "../../components/loading/loadingSpinner";

export default function SignInForm() {
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn({
        username: form.username,
        password: form.password,
      });
      setLoading(false);
      navigate("/events");
    } catch (err) {
      setMessage({
        text: "Sign in failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <AuthHeader>
        <h2 className="title">WELCOME BACK</h2>
        <p className="description">Please enter your credentials</p>
      </AuthHeader>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter your username"
          icon={User}
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
        <Button type="submit">Sign In</Button>
        <Button type="button" onClick={() => navigate("/auth/signup")}>
          Create an account
        </Button>
      </form>
      {message && <Message type={message.type}>{message.text}</Message>}
    </>
  );
}
