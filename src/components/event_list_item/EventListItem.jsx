import { EventListItemContainer, Picture, Title } from "./EventListItemSC";
import { NavLink } from "react-router-dom";

export default function EventListItem({ event }) {
  return (
    <NavLink to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
      <EventListItemContainer>
        <Picture src={event.picture} />
        <Title>{event.title}</Title>
      </EventListItemContainer>
    </NavLink>
  );
}
