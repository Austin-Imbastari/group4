import React from "react";
import data from "../../data/events.json";
import { ParentContainer, ImageContainer } from "./EventsDetailsSC.js";

export default function EventDetails() {
  return data.map((events) => {
    return (
      <ParentContainer key={events.id}>
        <ImageContainer>
          <img src={events.cover_image.src} alt={events.cover_image.alt} />
        </ImageContainer>
        <h1 className="event_title">{events.title}</h1>
        <span className="organizer">By: {events.organizer}</span>
        <p>{events.description}</p>
        <button className="Attend-btn">
          {events.actions.attend_button.label}
        </button>
        <h2>Event Details:</h2>
        <b></b>
        <p>Location: {events.details.location}</p>
        <p>Duration: {events.details.duration}</p>
        <p>Expected Price: {events.details.price}</p>
        <b></b>
        <h2>What to Bring:</h2>
        <ul>
          {events.checklist.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <b></b>
      </ParentContainer>
    );
  });
}
