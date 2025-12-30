import { NavLink } from "react-router-dom";
import {
  EventContainer,
  EventTopContainer,
  EventCenterContainer,
  EventBottomContainer,
} from "./AllEventSC";

export default function Event({ event }) {
    return (
        <NavLink to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
            <EventContainer>
                <EventTopContainer $bg={event.picture}>
                    <span>{event.category}</span>
                </EventTopContainer>

        <EventCenterContainer>
          <span>{event.title}</span>
        </EventCenterContainer>

                <EventBottomContainer>
                    <span>Hosted by: {event.host}</span>
                    <span className="span2">
                        {event.date} {event.time ? `@ ${event.time}` : ""} * {event.attendees} attendees
                    </span>
                </EventBottomContainer>
            </EventContainer>
        </NavLink>
    );
}
