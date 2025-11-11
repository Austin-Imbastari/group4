import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 1rem;
`;

export const AuthHeader = styled.div`
  text-align: center;

  .title {
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  .description {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const AuthContainer = styled.div`
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
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${(props) =>
    props.type === "error"
      ? props.theme.colors.error
      : props.theme.colors.success};
`;
