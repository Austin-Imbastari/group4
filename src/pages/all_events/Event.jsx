import { NavLink } from "react-router-dom";
import {
  EventContainer,
  EventPicture,
  EventTitle,
  EventInfoRow,
} from "./AllEventSC";

export default function Event({ event }) {
  return (
    <NavLink to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
      <EventContainer>
        <EventPicture $bg={event.picture}>
          <span>{event.category}</span>
        </EventPicture>

        <EventTitle>
          <span>{event.title}</span>
        </EventTitle>

        <EventInfoRow>
          <span>Hosted by: {event.host}</span>
          <span className="span2">
            {event.date} {event.time ? `@ ${event.time}` : ""} *{" "}
            {event.attendees} attendees
          </span>
        </EventInfoRow>
      </EventContainer>
    </NavLink>
  );
}
