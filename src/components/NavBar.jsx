import { NavLink } from "react-router-dom";
import { NavBarContainer, Title, NavBarCenterContainer, NavBarSignIn } from "./NavBarSC";

const NavBar = () => {
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
      <NavBarSignIn>
        <NavLink to="/auth">
          <span>Sign in</span>
        </NavLink>
      </NavBarSignIn>
    </NavBarContainer>
  );
};

export default NavBar;
