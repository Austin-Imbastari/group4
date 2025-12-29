import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  .icon {
    color: ${({ theme }) => theme.colors.accentDark};
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  line-height: 1.4;
  border: 1px solid ${({ theme }) => theme.colors.accentDark};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryNormalHover};
  }
`;
