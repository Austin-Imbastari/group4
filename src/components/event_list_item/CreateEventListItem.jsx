import { NavLink } from "react-router-dom";
import {
  CreateEventListItemContainer,
  CreateEventText,
} from "./CreateEventListItem";
import { CirclePlus } from "lucide-react";

export default function CreateEventListItem() {
  return (
    <NavLink to="/create-event" style={{ textDecoration: "none" }}>
      <CreateEventListItemContainer>
        <PlusIcon>
          <CirclePlus />
        </PlusIcon>
        <CreateEventText>Create an Event</CreateEventText>
      </CreateEventListItemContainer>
    </NavLink>
  );
}
