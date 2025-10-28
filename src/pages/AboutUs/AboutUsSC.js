import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(135deg, #fcfcfc 0%, #fff5f293 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pill-header {
    background: #fae6dd;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 40px;
    color: ${({ theme }) => theme.colors.primaryNormal};
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  .split-header {
    color: ${({ theme }) => theme.colors.primaryNormal};
  }
  .title {
    margin-top: 5%;
  }
  p {
    font-size: 18px;
    max-width: 800px;
    margin-top: 5%;
  }
`;

export const ParentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  /* background-color: #fdfefc; */
`;

export const OurStoryContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 2px;
  color: #666;

  .line {
    content: "";
    width: 40px;
    height: 3px;
    background-color: #e36f3d;
    border-radius: 2px;
  }

  .ourstory {
    padding-left: 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  margin-top: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 2rem;
    color: #a32c2c;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #000;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const OurStorySection = styled.section`
  background-color: #fdfefc;
  padding: 80px 0;
`;

export const ValueContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
  min-height: 50vh;

  .title {
    text-align: center;
    margin-top: 10%;
    p {
      margin-top: 20px;
      color: #000;
    }
  }
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  text-align: left;
  flex: 1;
  min-width: 260px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a32c2c, #e36f3d);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
      color: #fff;
    }
  }

  h3 {
    color: #7a1d1d;
    font-weight: 700;
    font-size: 1.125rem;
  }

  p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;
export const ThrivingCommunityContainer = styled.section`
  padding: 80px 0 56px;
  min-height: 50vh;
  background: radial-gradient(1200px 400px at 50% 0%, rgba(227, 111, 61, 0.08), transparent 60%), #fff;
`;

export const CTASection = styled.section`
  background: #fdfefc;
  padding: 72px 0 96px;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  /* @media (max-width: 900px) {
    padding: 0 24px;
  } */
`;

export const Heading = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: clamp(1.75rem, 1.2rem + 2vw, 2.25rem);
  color: #8f2222;
  margin: 0;
`;

export const Subhead = styled.div`
  text-align: center;
  color: #6b6b6b;
  margin: 8px auto 32px;
  max-width: 720px;
  line-height: 1.6;
`;

export const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;

  /* @media (max-width: 900px) {
    grid-template-columns: 1fr;
  } */
`;

export const ImageCard = styled.figure`
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  img {
    display: block;
    width: 100%;
    height: clamp(220px, 28vw, 320px);
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
  }
`;

export const CTAHeading = styled.div`
  text-align: center;
  color: #8f2222;
  font-weight: 800;
  font-size: clamp(1.6rem, 1.1rem + 2vw, 2rem);
  margin: 0 0 12px;
`;

export const CTAText = styled.div`
  text-align: center;
  color: #5a5a5a;
  max-width: 680px;
  margin: 0 auto 24px;
  line-height: 1.6;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const BaseButton = styled.div`
  appearance: none;
  border: 0;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);

  &:active {
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: #e36f3d;
  color: #fff;

  &:hover {
    background: #cf6336;
  }
`;

export const GhostButton = styled(BaseButton)`
  color: #8f2222;
  border: 2px solid #8f2222;
  box-shadow: none;

  &:hover {
    background: rgba(143, 34, 34, 0.06);
  }
`;
