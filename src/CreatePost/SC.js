import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 900px;
  margin: auto;

  label {
    margin-bottom: 0.5rem;
    line-height: 1.25;
    font-weight: 500;
    color: #000;
  }

  textarea {
    min-height: 10rem;
    resize: vertical;
    padding-left: 2.5rem;
    padding-top: 1rem;
  }

  input,
  textarea {
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
  }
`;

export const TitleText = styled.div`
  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.accentDark};
  }

  h1 {
    /* text-align: center; */
    font-family: ${({ theme }) => theme.fonts.alt};
  }
`;

export const FormGrid = styled.form`
  /* outline: 1px solid red; */
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "title     price"
    "location  type"
    "date      time"
    "description description"
    "upload    upload"
    "submit    submit";
  align-items: start;
`;

export const InputContainer = styled.div`
  position: relative;

  .icon {
    color: ${({ theme }) => theme.colors.accentDark};
    position: absolute;
    left: 12px;
    top: 10px;
    transform: none;
    pointer-events: none;
  }
`;

export const TitleField = styled.div`
  /* outline: 1px solid red; */
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PriceField = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LocationField = styled.div`
  grid-area: location;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TypeField = styled.div`
  grid-area: type;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DateField = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TimeField = styled.div`
  grid-area: time;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DescriptionField = styled.div`
  grid-area: description;
`;

export const ImageField = styled.div`
  grid-area: upload;
`;

export const SubmitButton = styled.div`
  grid-area: submit;
  button {
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
  }
`;
