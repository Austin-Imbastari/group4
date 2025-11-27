import { AuthPageWrapper } from "./AuthPageSC";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <AuthPageWrapper>
      <Outlet />
    </AuthPageWrapper>
  );
}
