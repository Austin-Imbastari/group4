import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.primaryNormal};
  font-weight: 600;
  span {
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      transition: 200ms;
      box-shadow: 2px 2px 2px 2px;
    }
  }
`;

export const NavBarCenterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  span {
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      transition: 200ms;
      box-shadow: 2px 2px 2px 2px;
    }
  }
`;

export const NavBarSignIn = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primaryNormal};
  padding: 5px 20px;
  border-radius: 5px;
  color: inherit;
  span {
    color: black;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryNormal};
  }
`;
