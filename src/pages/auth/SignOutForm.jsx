import Button from "../../components/button/Button";
import { AuthHeader, Message } from "./AuthPageSC";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function SignOutForm() {
  const { user, signOut } = useAuth();
  const [message, setMessage] = useState(null);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      setMessage({
        text: "Sign out failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  return (
    <>
      <AuthHeader>
        <h2 className="title">Hi {user?.get("username")}!</h2>
        <p className="description">Do you want to sign out?</p>
      </AuthHeader>
      <Button onClick={handleSignOut}>Sign Out</Button>
      {message && <Message type={message.type}>{message.text}</Message>}
    </>
  );
}
