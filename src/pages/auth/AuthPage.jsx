import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import SignIn from "./SignIn";

export default function AuthPage() {
  return (
    <AuthPageWrapper>
      <AuthContainer>
        <SignIn />
      </AuthContainer>
    </AuthPageWrapper>
  );
}
