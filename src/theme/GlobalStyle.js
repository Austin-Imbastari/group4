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

`;
