import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavBarContainer, Title, NavBarCenterContainer, NavBarSignIn } from "./NavBarSC";
import { getParse } from "../../lib/parseClient";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = async () => {
    const Parse = await getParse();
    const currentUser = await Parse.User.currentAsync();
    const username = currentUser.get("username");
    setCurrentUser(username);
  };

  useEffect(() => {
    getCurrentUser();
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
      {currentUser ? (
        <div style={{ marginTop: 12 }}>
          <span>
            <strong>{currentUser}</strong>
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
