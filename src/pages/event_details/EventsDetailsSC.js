import styled from "styled-components";

export const ParentContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: ${(props) => props.theme.colors.secondaryNormal};

  h1.event_title {
    font-family: ${(props) => props.theme.fonts.alt};
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.secondaryNormal};
    margin: 1rem 0 0.25rem;
  }

  .dateOfEvent {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: #888;
    margin-bottom: 0.25rem;
  }

  .organizer,
  .attendees {
    display: block;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.accentDark};
  }

  .attendees {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: black;
  }

  .eventDetails {
    display: flex;
    justify-content: space-between;
  }
  .locationContainer {
    display: flex;
    flex-direction: column;
  }
  .Detail {
    color: ${(props) => props.theme.colors.accentDark};
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme.colors.secondaryNormal};
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  
  ul {
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondaryNormal};
  }
  
  li {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.colors.accentDark};
  }
  `;


export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    display: block;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export const ModalContainer = styled.div`
button {
  display: block;
  margin: auto;
  width: 10rem;
  height: 2rem;
}

:modal {
  background-color: beige;
  border: 2px solid burlywood;
  border-radius: 5px;
}

p {
  color: black;
}
`;
