import styled from "styled-components";

export const Section = styled.section`
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: clamp(24px, 5vw, 64px);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
`;

export const Left = styled.div`
  display: grid;
  gap: 20px;
`;

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #8a8282;
  font-weight: 500;

  .line {
    width: 72px;
    height: 2px;
    border-radius: 2px;
    background: #b98d8d;
    opacity: 0.7;
  }
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3vw + 1rem, 3.25rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.02em;

  .top {
    color: #8f2b2b;
  }

  .bottom {
    background: linear-gradient(90deg, #9b2c2c, #e36f3d);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const CTA = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #e36f3d, #d85f2c);
  box-shadow: 0 10px 18px rgba(227, 111, 61, 0.25);
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  .arrow {
    opacity: 0.9;
    transform: translateY(1px);
  }

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Right = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  min-height: clamp(280px, 36vw, 520px);

  @media (max-width: 960px) {
    order: -1;
  }
`;

export const Circle = styled.figure`
  --size: clamp(280px, 36vw, 620px);
  margin: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  background: #ddd;
  position: relative;

  &.main {
    width: var(--size);
    height: var(--size);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.small {
    position: absolute;
    border: 2px solid #fff;
    width: clamp(86px, 10vw, 150px);
    aspect-ratio: 1 / 1;

    &.s1 {
      right: 8%;
      bottom: 8%;
    }

    &.s2 {
      right: 22%;
      bottom: -6%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
