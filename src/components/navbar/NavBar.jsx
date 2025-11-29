import { NavLink } from "react-router-dom";
import { NavBarContainer, Title, NavBarCenterContainer } from "./NavBarSC";
import { User } from "lucide-react";

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
      <NavLink to="/auth/signin">
        <User size={30} />
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
