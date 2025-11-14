import React from "react";
import { NavLink } from "react-router-dom";
import {
  Section,
  HeaderContainer,
  OurStorySection,
  ParentContainer,
  OurStoryContainer,
  ContentWrapper,
  TextContainer,
  ImageContainer,
  ValueContainer,
  CardGrid,
  Card,
  ThrivingCommunityContainer,
  CTASection,
  InnerContainer,
  Heading,
  Subhead,
  ImageRow,
  ImageCard,
  CTAHeading,
  CTAText,
  Buttons,
  PrimaryButton,
  GhostButton,
} from "./AboutUsSC.js";

// import Button from "../../components/button/Button.jsx";

import data from "./data.json";

import { Heart, Shield, Sparkles, Globe } from "lucide-react";
const iconMap = {
  heart: <Heart />,
  shield: <Shield />,
  sparkles: <Sparkles />,
  globe: <Globe />,
};

const imagesCommunity = [
  { src: "/images/community-1.png", alt: "Friends cheering at a rooftop table" },
  { src: "/images/community-2.png", alt: "Colorful wall with person at a window" },
  { src: "/images/community-3.png", alt: "Group standing on a balcony" },
];

const AboutUs = () => {
  return (
    <>
      <Section>
        <HeaderContainer>
          <span className="pill-header">About Ember</span>
          <div className="title">
            <h1>
              Building Friendships, <br /> <span className="split-header"> One Event at a Time</span>
            </h1>
            <p>
              Ember was born from a simple idea: meaningful friendships shouldn't be hard to find. We're creating a
              world where everyone has the opportunity to connect, share experiences, and build lasting relationships.
            </p>
          </div>
        </HeaderContainer>
      </Section>
      <OurStorySection>
        <ParentContainer>
          <OurStoryContainer>
            <span className="line"></span>
            <span className="ourstory">OUR STORY</span>
          </OurStoryContainer>
          <ContentWrapper>
            <TextContainer>
              <h1>
                Where Connection <br /> Meets Community
              </h1>
              <p>
                In 2025, we noticed something troubling: despite being more "connected" than ever through technology,
                many people felt isolated and struggled to form genuine friendships.
              </p>
              <p>
                We created Ember to change that. A platform that brings people together through shared experiences,
                whether it's a coffee meetup, a hiking adventure, or a creative workshop. Because we believe the best
                friendships are forged through real-world connections.
              </p>
              <p>
                Today, Ember is more than just a platform—it's a movement. A community of thousands who believe in the
                power of friendship, inclusion, and authentic human connection.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src="/images/couple.png" alt="Elderly couple smiling outdoors" />
            </ImageContainer>
          </ContentWrapper>
        </ParentContainer>
      </OurStorySection>

      <ValueContainer>
        <div className="title">
          <h1>Our Values</h1>
          <p>The principles that guide everything we do at Ember</p>
        </div>

        <CardGrid>
          {data.values.map((item) => (
            <Card key={item.title}>
              <div className="icon-wrapper">{iconMap[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </CardGrid>
      </ValueContainer>
      <ThrivingCommunityContainer>
        <InnerContainer>
          <Heading>
            <h3>A Thriving Community</h3>
          </Heading>
          <Subhead>
            <p>See the friendships and connections flourishing through Ember</p>
          </Subhead>

          <ImageRow>
            {imagesCommunity.map((img) => (
              <ImageCard key={img.src}>
                <img src={img.src} alt={img.alt || ""} />
              </ImageCard>
            ))}
          </ImageRow>
        </InnerContainer>
      </ThrivingCommunityContainer>

      <CTASection>
        <InnerContainer>
          <CTAHeading>
            <h3>Ready to Find Your People?</h3>
          </CTAHeading>
          <CTAText>
            <p>Join thousands of people who have already found meaningful connections through Ember.</p>
          </CTAText>

          <Buttons>
            <NavLink style={{ textDecoration: "none" }} to="/events">
              <PrimaryButton>Browse Events</PrimaryButton>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/create-event">
              <GhostButton>Create an Event</GhostButton>
            </NavLink>
          </Buttons>
        </InnerContainer>
      </CTASection>
    </>
  );
};

export default AboutUs;
