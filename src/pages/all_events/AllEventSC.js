import styled from "styled-components";

export const EventContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  max-width: 400px;
  display: block;
  flex-direction: row;
  text-decoration: none;
  color: black;
  &:hover {
    transition: 300ms ease-in-out;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.colors.primaryNormalHover};
    padding: calc(var(--pad, 0px) + 5px);
    margin: calc(var(--margin, 0px) - 5px);
  }
`;

export const EventTopContainer = styled.div`
  padding-bottom: 150px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  background-image: url(${(p) => p.$bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  span {
    margin: 15px;
    border: 1px, solid, black;
    border-radius: 5px;
    padding: 5px 15px;
    color: white;

    background: rgba(128, 128, 128, 0.5);
  }
  span:hover {
    background-color: ${({ theme }) => theme.colors.primaryNormalHover};
  }
`;

export const EventCenterContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 10px 0px 30px 0px;
  font-size: larger;
`;

export const EventBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: small;
  margin: 0px 8px 10px 8px;
  .span2 {
    color: grey;
  }
`;

export const EventCards = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  padding: 16px 36px;
`;

export const NewEventContainer = styled.div`
  .icon-circle {
    width: 320px;
    margin: 5px 5px;
    height: 210px;
    font-size: larger;
    color: grey;
    outline: 1px dotted grey;
    border-radius: 10px;
  }
  span {
    font-size: larger;
    color: grey;
  }
`;

export const AllEventsPageContainer = styled.div`
  margin-top: 70px;
  min-height: 100vh;

  background: linear-gradient(135deg, #fcfcfc 0%, #fff5f293 100%);
  .navBar {
    display: flex;
    gap: 5px;
    padding: 10px 5px;
    margin: 10px;
  }

  #eventDay {
    padding: 5px 10px;
    border-radius: 5px;
  }
  #eventDistance {
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
