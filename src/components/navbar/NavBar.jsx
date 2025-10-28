import { NavLink } from "react-router-dom";
import {
  NavBarContainer,
  Title,
  NavBarCenterContainer,
  NavBarSignIn,
} from "./NavBarSC";
import AllEvents from "../../pages/all_events/AllEvents"

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
      <NavLink to="/auth">
        <NavBarSignIn>
          <span>Sign in</span>
        </NavBarSignIn>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
