import { LoginContainer } from "./LoginSC";

export default function Login() {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <h3>Please enter your credentials</h3>
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
