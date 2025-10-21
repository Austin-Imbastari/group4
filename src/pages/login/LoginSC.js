import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
