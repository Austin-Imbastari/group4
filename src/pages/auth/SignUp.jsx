import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { User, Mail, Lock } from "lucide-react";

export default function SignUp() {
  return (
    <>
      <h2>GET STARTED</h2>
      <text>Please fill in your credentials to create an account</text>
      <form>
        <InputField
          label="Full Name"
          name="username"
          placeholder="Enter your full name"
          icon={User}
        />
        <InputField
          label="Email"
          name="email"
          placeholder="Enter your email"
          icon={Mail}
        />
        <InputField
          label="Password"
          name="password"
          placeholder="Enter your password"
          icon={Lock}
        />
      </form>
      <Button type="submit">Sign Up</Button>
    </>
  );
}
