import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${(props) => props.theme.fonts.main};
        font-size: ${(props) => props.theme.fontSizes.medium};
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: ${(props) => props.theme.colors.secondaryNormal};
`;
