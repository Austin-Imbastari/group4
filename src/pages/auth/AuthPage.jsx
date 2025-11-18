import { AuthContainer, AuthPageWrapper } from "./AuthPageSC";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <AuthPageWrapper>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </AuthPageWrapper>
  );
}
