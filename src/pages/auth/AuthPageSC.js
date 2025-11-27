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

export const Message = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${(props) =>
    props.type === "error"
      ? props.theme.colors.error
      : props.theme.colors.success};
`;
