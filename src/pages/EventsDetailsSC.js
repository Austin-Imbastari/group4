import styled from "styled-components";

export const ParentContainer = styled.div`
outline: 10px ${({theme}) => theme.colors.primartNormal};
;
`;


export const ImageContainer = styled.div`
width: 100%;
max-width: 40px;
`;

export const StyledImage = styled.img`
width:100%;
height: auto;
display: block;
object-fit: cover;
`
;
