import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import { getCurrentUser, signInUser } from "../../lib/parseService";
import { AuthContainer, AuthHeader, Message } from "./AuthContainerSC";
import { useLocation } from "react-router-dom";

export default function SignInForm() {
  const location = useLocation();
  const showMessage = location.state?.fromCreateEvent;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const user = await getCurrentUser();
      if (user) {
        navigate("/profile");
      }
    }
    checkUser();
  }, [navigate]);

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInUser({
        username: form.username,
        password: form.password,
      });
      setLoading(false);
      navigate("/events");
    } catch (err) {
      setLoading(false);
      setMessage({
        text: "Sign in failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <AuthContainer>
      <AuthHeader>
        <h2 className="title">WELCOME BACK</h2>
        {showMessage && (
          <div className="signin-hint">
            You must be signed in to create an event.
          </div>
        )}
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
    </AuthContainer>
  );
}
