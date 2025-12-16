import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const EventsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
