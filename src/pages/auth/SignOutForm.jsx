import Button from "../../components/button/Button";
import { AuthHeader, Message } from "./AuthPageSC";
import { useState, useEffect } from "react";
import { signOutUser, getCurrentUser } from "../../lib/parseService";
import { useNavigate } from "react-router-dom";

export default function SignOutForm() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      const current = await getCurrentUser();
      setUser(current);
    }
    load();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/events");
    } catch (err) {
      setMessage({
        text: "Sign out failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  if (!user) {
    navigate("/auth/signin");
    return null;
  }

  return (
    <>
      <AuthHeader>
        <h2 className="title">Hi!</h2>
        <p className="description">Do you want to sign out?</p>
      </AuthHeader>
      <Button onClick={handleSignOut}>Sign Out</Button>
      {message && <Message type={message.type}>{message.text}</Message>}
    </>
  );
}
