import React from "react";
import data from "../../data/events.json";
import { ParentContainer, ImageContainer } from "./EventsDetailsSC.js";
import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const event = data.find((e) => String(e.id) === String(id));

  if (!event) return <p>Event not found.</p>;

  return (
    <ParentContainer>
      <ImageContainer>
        <img src={event.cover_image.src} alt={event.cover_image.alt} />
      </ImageContainer>

      <h1 className="event_title">{event.title}</h1>
      <p className="dateOfEvent">Date: {event.date}</p>
      <p className="organizer">By: {event.organizer}</p>
      <p className="attendees">Attendees: {event.attendees_count}</p>

      <p>{event.description}</p>

      <button className="Attend-btn">{event.actions?.attend_button?.label ?? "Attend"}</button>

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
