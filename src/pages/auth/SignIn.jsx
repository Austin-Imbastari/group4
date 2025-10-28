import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { User, Lock } from "lucide-react";

export default function SignIn() {
  return (
    <>
      <h2>WELCOME BACK</h2>
      <text>Please enter your credentials</text>
      <form>
        <InputField
          label="Username"
          name="username"
          placeholder="Enter your username"
          icon={User}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          icon={Lock}
        />
      </form>
      <Button type="submit">Sign In</Button>
    </>
  );
}
