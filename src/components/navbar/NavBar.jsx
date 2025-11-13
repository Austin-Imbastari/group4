import { NavLink } from "react-router-dom";
import {
  NavBarContainer,
  Title,
  NavBarCenterContainer,
  NavBarSignIn,
} from "./NavBarSC";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <NavBarContainer>
      <NavLink to="/">
        <Title>
          <span>Ember</span>
        </Title>
      </NavLink>
      <NavBarCenterContainer>
        <NavLink to="/about">
          <span>About Us</span>
        </NavLink>
        <NavLink to="/events">
          <span>Events</span>
        </NavLink>
      </NavBarCenterContainer>
      {user?.username ? (
        <div style={{ marginTop: 12 }}>
          <span>
            <strong>{user.username}</strong>
          </span>
        </div>
      ) : (
        <NavLink to="/auth">
          <NavBarSignIn>
            <span>Sign in</span>
          </NavBarSignIn>
        </NavLink>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
