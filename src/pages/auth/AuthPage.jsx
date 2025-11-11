import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { useAuth } from "../../hooks/useAuth";

export default function AuthPage() {
  const { authStep } = useAuth();

  return (
    <AuthPageWrapper>
      <AuthContainer>
        {/* TODO: Render SignIn, SignOut, or SignUp based on auth state */}
        {authStep === "signin" && <SignIn />}
        {authStep === "signout" && <SignOut />}
        {authStep === "signup" && <SignUp />}
      </AuthContainer>
    </AuthPageWrapper>
  );
}
