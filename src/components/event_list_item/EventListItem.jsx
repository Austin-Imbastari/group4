import {
  EventListItemContainer,
  Picture,
  TextWrapper,
  Title,
  Date,
} from "./EventListItemSC";
import { NavLink } from "react-router-dom";

export default function EventListItem({ event }) {
  return (
    <NavLink to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
      <EventListItemContainer>
        <Picture src={event.picture} />
        <TextWrapper>
          <Title>{event.title}</Title>
          <Date>{event.date}</Date>
        </TextWrapper>
      </EventListItemContainer>
    </NavLink>
  );
}
