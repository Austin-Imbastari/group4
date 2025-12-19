import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  align-items: center;
  gap: 1rem;
  background-color: white;
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.primaryNormal};
`;

export const HeaderText = styled.p`
  font-size: ${(props) => props.theme.fontSizes};
  max-width: 600px;
  text-align: center;
`;

export const EventContainersWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
`;

export const EventContainer = styled.div`
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
