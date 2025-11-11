import styled from "styled-components";

export const ButtonSC = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.primaryNormal};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryNormalHover};
  }
`;
