import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}


    body {
        font-family: ${(props) => props.theme.fonts.main};
        font-size: ${(props) => props.theme.fontSizes.medium};
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: ${(props) => props.theme.colors.secondaryNormal};
        scroll-behavior: smooth;
    }

    label {
    margin-bottom: 0.5rem;
    line-height: 1.25;
    font-weight: 500;
    color: #000;
  }

  textarea {
    min-height: 10rem;
    resize: vertical;
    padding-left: 2.5rem;
    padding-top: 1rem;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    line-height: 1.4;
    border: 1px solid ${({ theme }) => theme.colors.accentDark};
    border-radius: 12px;
    background-color: #f3f3f5;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none;
    width: 100%;
    box-sizing: border-box;
    padding-left: 2.5rem;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

`;
