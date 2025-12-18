import { NavLink } from "react-router-dom";
import { CreateEventListItemContainer } from "./CreateEventListItem";
import { CirclePlus } from "lucide-react";

export default function CreateEventListItem() {
  return (
    <NavLink to="/create-event" style={{ textDecoration: "none" }}>
      <CreateEventListItemContainer>
        <PlusIcon>
          <CirclePlus />
        </PlusIcon>
        <span>Create an Event</span>
      </CreateEventListItemContainer>
    </NavLink>
  );
}
