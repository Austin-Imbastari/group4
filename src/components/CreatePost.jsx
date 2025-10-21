import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Handshake, HandCoins, MapPin, SwatchBook, CalendarDays, Clock6, PencilLine, Image } from "lucide-react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    type: "",
    date: "",
    time: "",
    description: "",
    image: null,
  });

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    /// this form will handle sending the data to the database
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Wrapper>
      <TitleText>
        <h1>Create Event</h1>
        <p>Please fill in the details about your event</p>
      </TitleText>

      <FormGrid onSubmit={handleOnSubmit}>
        <TitleField>
          <label htmlFor="title">What event would you like to host?</label>
          <InputContainer>
            <Handshake className="icon" />
            <input onChange={handleOnChange} id="title" type="text" placeholder="Coffee meetup" />
          </InputContainer>
        </TitleField>

        <PriceField>
          <label htmlFor="price">Expected price</label>
          <InputContainer>
            <HandCoins className="icon" />
            <input onChange={handleOnChange} id="price" type="text" placeholder="20DKK" />
          </InputContainer>
        </PriceField>

        <LocationField>
          <label htmlFor="location">Where will the event take place?</label>
          <InputContainer>
            <MapPin className="icon" />
            <input onChange={handleOnChange} id="location" type="text" placeholder="Nørrebro" />
          </InputContainer>
        </LocationField>

        <TypeField>
          <label htmlFor="type">What type of event?</label>
          <InputContainer>
            <SwatchBook className="icon" />
            <input onChange={handleOnChange} id="type" type="text" placeholder="Coffee" />
          </InputContainer>
        </TypeField>

        <DateField>
          <label htmlFor="date">Date</label>
          <InputContainer>
            <CalendarDays className="icon" />
            <input onChange={handleOnChange} id="date" type="text" placeholder="December 20, 2025" />
          </InputContainer>
        </DateField>

        <TimeField>
          <label htmlFor="time">Time</label>
          <InputContainer>
            <Clock6 className="icon" />
            <input onChange={handleOnChange} id="time" type="text" placeholder="16:00" />
          </InputContainer>
        </TimeField>

        <DescriptionField>
          <label htmlFor="description">Description</label>
          <InputContainer>
            <PencilLine className="icon" aria-hidden="true" />
            <textarea onChange={handleOnChange} id="description" placeholder="Tell your story..." rows={6} />{" "}
          </InputContainer>
        </DescriptionField>

        <ImageField>
          <label htmlFor="upload">Upload Image</label>
          <InputContainer>
            <Image className="icon" />
            <input onChange={handleOnChange} id="image" type="file" className="input-file" accept=".png, .jpg, .jpeg" />
          </InputContainer>
        </ImageField>

        <SubmitButton>
          <label htmlFor="submit">Submit</label>
          <InputContainer>
            <button>Post Event</button>
          </InputContainer>
        </SubmitButton>
      </FormGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const TitleText = styled.div`
  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.accentDark};
  }

  h1 {
    /* text-align: center; */
    font-family: ${({ theme }) => theme.fonts.alt};
  }
`;

const FormGrid = styled.form`
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

const InputContainer = styled.div`
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

const TitleField = styled.div`
  /* outline: 1px solid red; */
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PriceField = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LocationField = styled.div`
  grid-area: location;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TypeField = styled.div`
  grid-area: type;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateField = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TimeField = styled.div`
  grid-area: time;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DescriptionField = styled.div`
  grid-area: description;
`;

const ImageField = styled.div`
  grid-area: upload;
`;

const SubmitButton = styled.div`
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

export default CreatePost;
