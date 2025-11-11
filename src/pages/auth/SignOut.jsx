import Button from "../../components/button/Button";
import { AuthHeader } from "./AuthPageSC";
import { useAuth } from "../../hooks/useAuth";

export default function SignOut() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <AuthHeader>
        <h2 className="title">Hi {user?.username}!</h2>
        <p className="description">Do you want to sign out?</p>
      </AuthHeader>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </>
  );
}
