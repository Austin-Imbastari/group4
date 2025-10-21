import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import SignUp from "./SignUp";

export default function AuthPage() {
  return (
    <AuthPageWrapper>
      <AuthContainer>
        {/* TODO: Render SignIn, SignOut, or SignUp based on auth state */}
        <SignUp />
      </AuthContainer>
    </AuthPageWrapper>
  );
}
