import React from "react";

import { NavLink } from "react-router-dom";
import { Section, InnerContainer, Left, Eyebrow, H1, CTA, Right, Circle } from "./SplashScreenSC.js";
const SplashScreen = () => {
  return (
    <Section>
      <InnerContainer>
        <Left>
          <Eyebrow>
            <span className="line" />
            <span>Friendship Without Fear.</span>
          </Eyebrow>
          <H1>
            <span className="top">Companionship</span>
            <br />
            <span className="bottom">Made Simple.</span>
          </H1>

          <NavLink to="/events">
            <CTA>
              Find A Friend
              <span className="arrow">›</span>
            </CTA>
          </NavLink>
        </Left>

        <Right>
          <Circle className="main">
            <img src="/images/findafriend.jpg" alt="findafriend" />
          </Circle>

          <Circle className="small s1">
            <img src="/images/image2.jpg" alt="splashscreen" />
          </Circle>

          <Circle className="small s2">
            <img src="/images/walking.jpg" alt="walking" />
          </Circle>
        </Right>
      </InnerContainer>
    </Section>
  );
};

export default SplashScreen;
