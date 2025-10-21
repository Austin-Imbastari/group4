export default function SignUp() {
  return (
    <>
      <h2>GET STARTED</h2>
      <text>Please fill in your credentials to create an account</text>
      <form>
        <label>
          Full Name:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
