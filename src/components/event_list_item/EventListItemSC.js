import styled from "styled-components";

export const EventListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.secondaryNormal};
  border-radius: 8px;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.secondaryNormalHover};
  }
`;

export const Picture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
`;

export const Title = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondaryNormal};
`;

export const Date = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.accentDark};
`;
