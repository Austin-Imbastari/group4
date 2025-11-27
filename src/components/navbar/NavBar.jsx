import { NavLink } from "react-router-dom";
import {
  NavBarContainer,
  Title,
  NavBarCenterContainer,
  NavBarSignIn,
} from "./NavBarSC";
import { getCurrentUser } from "../../lib/parseService";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }
    fetchUser();
  }, []);

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
        <NavLink to="/auth/signout">
          <div style={{ marginTop: 12 }}>
            <span>
              <strong>{user.username}</strong>
            </span>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/auth/signin">
          <NavBarSignIn>
            <span>Sign in</span>
          </NavBarSignIn>
        </NavLink>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
