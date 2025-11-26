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
                    <span>{event.saved ? ":)" : ":("}</span>
                </EventTopContainer>

                <EventCenterContainer>
                    <span>{event.title}</span>
                </EventCenterContainer>

                <EventBottomContainer>
                    <span>[ . ] By: {event.host}</span>
                    <span className="span2">
                        {event.date} {event.time ? `@ ${event.time}` : ""} * {event.attendents} attendees
                    </span>
                </EventBottomContainer>
            </EventContainer>
        </NavLink>
    );
}
