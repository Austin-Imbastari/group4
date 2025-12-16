import Button from "../../components/button/Button";
import { useState } from "react";
import { signOutUser } from "../../lib/parseService";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import { AuthContainer, AuthHeader, Message } from "./AuthContainerSC";

export default function SignOutForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOutUser();
      setLoading(false);
      navigate("/events");
    } catch (err) {
      setLoading(false);
      setMessage({
        text: "Sign out failed: " + (err?.message || err),
        type: "error",
      });
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <AuthContainer>
        <AuthHeader>
          <h2 className="title">Hi!</h2>
          <p className="description">Do you want to sign out?</p>
        </AuthHeader>
        <Button onClick={handleSignOut}>Sign Out</Button>
        {message && <Message type={message.type}>{message.text}</Message>}
      </AuthContainer>
    </>
  );
}
