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
  SuccessMessage,
} from "./CreateEventSC";
import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import { Handshake, HandCoins, MapPin, SwatchBook, CalendarDays, PencilLine, Image } from "lucide-react";

import { createEvent } from "../../lib/parseService";

const initialForm = {
  title: "",
  price: "",
  location: "",
  type: "",
  date: "",
  time: "",
  description: "",
  image: null,
};

const CreateEvent = () => {
  const [formData, setFormData] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "file" ? files?.[0] ?? null : value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = await createEvent(formData);
      console.log(newEvent);
      setFormData(initialForm);
      setSuccessMessage("Your event has been created successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch {
      setSuccessMessage(" Something went wrong. Please try again.");
    }
  };

  return (
    <Wrapper>
      <TitleText>
        <h1>Create Event</h1>
        <p>Please fill in the details about your event</p>
      </TitleText>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <FormGrid onSubmit={handleOnSubmit}>
        <TitleField>
          <label htmlFor="title">What event would you like to host?</label>
          <InputContainer>
            <InputField
              icon={Handshake}
              id="title"
              type="text"
              placeholder="Coffee meetup"
              onChange={handleOnChange}
              value={formData.title}
            />
          </InputContainer>
        </TitleField>

        <PriceField>
          <label htmlFor="price">Expected price</label>
          <InputContainer>
            <InputField
              icon={HandCoins}
              id="price"
              type="text"
              placeholder="20DKK"
              onChange={handleOnChange}
              value={formData.price}
            />
          </InputContainer>
        </PriceField>

        <LocationField>
          <label htmlFor="location">Where will the event take place?</label>
          <InputContainer>
            <InputField
              icon={MapPin}
              id="location"
              type="text"
              placeholder="Nørrebro"
              onChange={handleOnChange}
              value={formData.location}
            />
          </InputContainer>
        </LocationField>

        <TypeField>
          <label htmlFor="type">What type of event?</label>
          <InputContainer>
            <InputField
              icon={SwatchBook}
              id="type"
              type="text"
              placeholder="Coffee"
              onChange={handleOnChange}
              value={formData.type}
            />
          </InputContainer>
        </TypeField>

        <DateField>
          <label htmlFor="date">Date</label>
          <InputContainer>
            <InputField
              icon={CalendarDays}
              id="date"
              type="text"
              placeholder="December 20, 2025"
              onChange={handleOnChange}
              value={formData.date}
            />
          </InputContainer>
        </DateField>

        <TimeField>
          <label htmlFor="time">Time</label>
          <InputContainer>
            <InputField
              icon={CalendarDays}
              id="time"
              type="text"
              placeholder="16:00"
              onChange={handleOnChange}
              value={formData.time}
            />
          </InputContainer>
        </TimeField>

        <DescriptionField>
          <label htmlFor="description">Description</label>
          <InputContainer>
            <PencilLine className="icon" aria-hidden="true" />
            <textarea
              id="description"
              rows={6}
              placeholder="Tell your story..."
              onChange={handleOnChange}
              value={formData.description}
            />
          </InputContainer>
        </DescriptionField>

        <ImageField>
          <label htmlFor="upload">Upload Image</label>
          <InputContainer>
            <InputField
              icon={Image}
              id="image"
              type="file"
              className="input-file"
              accept=".png, .jpg, .jpeg"
              onChange={handleOnChange}
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
