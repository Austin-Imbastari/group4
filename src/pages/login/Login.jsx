import { LoginContainer } from "./LoginSC";

export default function Login() {
  return (
    <LoginContainer>
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
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
}
