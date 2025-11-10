import { useState } from "react";
import {
  Wrapper,
  TitleText,
  FormGrid,
  InputContainer,
  TitleField,
  PriceField,
  LocationField,
  TypeField,
  DateField,
  TimeField,
  DescriptionField,
  ImageField,
} from "./CreateEventSC";
import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { Handshake, HandCoins, MapPin, SwatchBook, CalendarDays, Clock6, PencilLine, Image } from "lucide-react";

const CreateEvent = () => {
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

  const handleOnSubmit = async (e) => {
    // this form will handle sending the data to the database
    e.preventDefault();
    try {
      // let response = await fetch("backend url", {})
      console.log(formData);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

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
            <InputField icon={Handshake} onChange={handleOnChange} id="title" type="text" placeholder="Coffee meetup" />
          </InputContainer>
        </TitleField>

        <PriceField>
          <label htmlFor="price">Expected price</label>
          <InputContainer>
            <InputField icon={HandCoins} onChange={handleOnChange} id="price" type="text" placeholder="20DKK" />
          </InputContainer>
        </PriceField>

        <LocationField>
          <label htmlFor="location">Where will the event take place?</label>
          <InputContainer>
            <InputField icon={MapPin} onChange={handleOnChange} id="location" type="text" placeholder="Nørrebro" />
          </InputContainer>
        </LocationField>

        <TypeField>
          <label htmlFor="type">What type of event?</label>
          <InputContainer>
            <InputField icon={SwatchBook} onChange={handleOnChange} id="type" type="text" placeholder="Coffee" />
          </InputContainer>
        </TypeField>

        <DateField>
          <label htmlFor="date">Date</label>
          <InputContainer>
            <InputField
              icon={CalendarDays}
              onChange={handleOnChange}
              id="date"
              type="text"
              placeholder="December 20, 2025"
            />
          </InputContainer>
        </DateField>

        <TimeField>
          <label htmlFor="time">Time</label>
          <InputContainer>
            <InputField icon={CalendarDays} onChange={handleOnChange} id="time" type="text" placeholder="16:00" />
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
            <InputField
              icon={Image}
              onChange={handleOnChange}
              id="image"
              type="file"
              className="input-file"
              accept=".png, .jpg, .jpeg"
            />
          </InputContainer>
        </ImageField>
      </FormGrid>
      <Button onClick={handleOnSubmit} type="submit">
        Submit
      </Button>
    </Wrapper>
  );
};

export default CreateEvent;
