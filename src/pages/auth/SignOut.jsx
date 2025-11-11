import Button from "../../components/button/Button";
import { AuthHeader } from "./AuthPageSC";

export default function SignOut() {
  return (
    <>
      {/* TODO: Render the name of the signed in user */}
      <AuthHeader>
        <h2 className="title">Hi *name*!</h2>
        <p className="description">Do you want to sign out?</p>
      </AuthHeader>
      <Button type="submit">Sign Out</Button>
    </>
  );
}
