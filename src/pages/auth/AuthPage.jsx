import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import SignOutForm from "./SignOutForm";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  const { user } = useAuth();

  if (user) {
    return (
      <AuthPageWrapper>
        <AuthContainer>
          <SignOutForm />
        </AuthContainer>
      </AuthPageWrapper>
    );
  }

  return (
    <AuthPageWrapper>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </AuthPageWrapper>
  );
}
