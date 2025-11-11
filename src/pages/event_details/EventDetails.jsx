import React from "react";
import data from "../../data/events.json";
import { ParentContainer, ImageContainer } from "./EventsDetailsSC.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import { useState } from "react";

export default function EventDetails() {
  const [openModal, setOpenModal] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const event = data.find((e) => String(e.id) === String(id));

  if (!event) return <p>Event not found.</p>;

  return (
    <ParentContainer>
      <Button variant="back" type="button" onClick={() => navigate(-1)}>
        Back
      </Button>
      <ImageContainer>
        <img src={event.cover_image.src} alt={event.cover_image.alt} />
      </ImageContainer>

      <h1 className="event_title">{event.title}</h1>
      <p className="dateOfEvent">Date: {event.date}</p>
      <p className="organizer">By: {event.organizer}</p>
      <p className="attendees">Attendees: {event.attendees_count}</p>

      <p>{event.description}</p>

      <Button type="button" onClick={() => setOpenModal(true)}>
        {console.log(openModal)}
        Attend
      </Button>

      <h2>Event Details:</h2>
      <div className="eventDetails">
        <div className="locationContainer">
          <p className="Detail">Location: </p>
          <p> {event.details.location}</p>
        </div>
        <div className="durationContainer">
          <p className="Detail">Duration: </p>
          <p> {event.details.duration}</p>
        </div>
        <div className="priceContainer">
          <p className="Detail">Expected Price:</p>
          <p> {event.details.price}</p>
        </div>
      </div>

      <h2>What to Bring:</h2>
      <ul>
        {event.checklist.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ParentContainer>
  );



}
