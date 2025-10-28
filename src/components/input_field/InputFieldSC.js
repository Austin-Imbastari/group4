import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  position: relative;

  .icon {
    color: ${({ theme }) => theme.colors.accentDark};
    position: absolute;
    left: 12px;
    top: 50%;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  color: #000;
`;

export const Input = styled.input`
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
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryNormalHover};
  }
`;
