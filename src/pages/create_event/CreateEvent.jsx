import { useState, useEffect } from "react";
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
  SuccessMessage,
  ZipField,
} from "./CreateEventSC";
import Button from "../../components/button/Button";
import InputField from "../../components/input_field/InputField";
import {
  Handshake,
  HandCoins,
  MapPin,
  CalendarDays,
  PencilLine,
  Image,
} from "lucide-react";
import DropdownField from "../../components/dropdown_field/DropdownField";
import { createEvent, getAllActivityTypes } from "../../lib/parseService";

const initialForm = {
  title: "",
  price: "",
  location: "",
  type: "",
  date: "",
  time: "",
  description: "",
  activityTypeId: "",
  zip: "",
};

const CreateEvent = () => {
  const [formData, setFormData] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");
  const [activityTypes, setActivityTypes] = useState([]);

  const handleOnChange = (e) => {
    const { id, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "file" ? files?.[0] ?? null : value,
    }));
  };

  useEffect(() => {
    async function loadActivityTypes() {
      const types = await getAllActivityTypes();
      setActivityTypes(types);
    }
    loadActivityTypes();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!formData.zip || formData.zip < 1000 || formData.zip > 9999) {
      setSuccessMessage(
        "Zip code must be a 4-digit number between 1000 and 9999."
      );
      return;
    }
    console.log("Submitting form data:", formData);
    try {
      const newEvent = await createEvent(formData);
      console.log(newEvent);
      setFormData(initialForm);
      setSuccessMessage("Your event has been created successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setSuccessMessage("Something went wrong. Please try again.");
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

        <ZipField>
          <label htmlFor="zip">Zip Code</label>
          <InputContainer>
            <InputField
              icon={MapPin}
              id="zip"
              type="number"
              placeholder="2200"
              min={1000}
              max={9999}
              onChange={handleOnChange}
              value={formData.zip}
            />
          </InputContainer>
        </ZipField>

        <TypeField>
          <InputContainer>
            <DropdownField
              id="activityTypeId"
              label="What type of event?"
              icon={MapPin}
              value={formData.activityTypeId}
              onChange={handleOnChange}
            >
              <option value="">Other</option>
              {activityTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </DropdownField>
          </InputContainer>
        </TypeField>

        <DateField>
          <label htmlFor="date">Date</label>
          <InputContainer>
            <InputField
              icon={CalendarDays}
              id="date"
              type="date"
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
      </FormGrid>
      <Button onClick={handleOnSubmit} type="submit">
        Submit
      </Button>
    </Wrapper>
  );
};

export default CreateEvent;
