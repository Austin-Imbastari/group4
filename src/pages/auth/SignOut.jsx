import Button from "../../components/button/Button";

export default function SignOut() {
  return (
    <>
      {/* TODO: Render the name of the signed in user */}
      <h2>Hi *name*!</h2>
      <p className="description">Do you want to sign out?</p>
      <Button type="submit">Sign Out</Button>
    </>
  );
}
