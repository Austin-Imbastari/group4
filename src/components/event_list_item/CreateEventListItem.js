import styled from "styled-components";

export const CreateEventListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border: 1px dotted ${(props) => props.theme.colors.accentDark};
  border-radius: 8px;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.accentDark};
  }
`;

export const PlusIcon = styled.div`
  width: 48px;
  height: 48px;
`;

export const CreateEventText = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
`;
