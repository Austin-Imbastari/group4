import { AuthPageWrapper } from "./AuthPageSC";
import { AuthContainer } from "./AuthContainerSC";
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