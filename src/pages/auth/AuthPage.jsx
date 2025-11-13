import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import SignInForm from "./SignInForm";
import SignOutForm from "./SignOutForm";
import { useAuth } from "../../hooks/useAuth";

export default function AuthPage() {
  const { user } = useAuth();

  return (
    <AuthPageWrapper>
      <AuthContainer>{user ? <SignOutForm /> : <SignInForm />}</AuthContainer>
    </AuthPageWrapper>
  );
}
