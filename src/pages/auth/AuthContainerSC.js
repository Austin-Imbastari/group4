import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  form {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1rem;
  }
`;
