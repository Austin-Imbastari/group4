import styled from "styled-components";

export const CreateEventListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border: 1px dashed ${(props) => props.theme.colors.secondaryNormal};
  border-radius: 8px;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.secondaryNormalHover};
  }
`;

export const PlusIconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondaryNormal};
`;

export const CreateEventText = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondaryNormal};
`;
