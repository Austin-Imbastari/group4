import Button from "../../components/button/Button";

export default function SignIn() {
  return (
    <>
      <h2>WELCOME BACK</h2>
      <text>Please enter your credentials</text>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
