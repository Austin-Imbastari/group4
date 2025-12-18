import { NavLink } from "react-router-dom";
import {
  CreateEventListItemContainer,
  CreateEventText,
  PlusIconContainer,
} from "./CreateEventListItemSC";
import { CirclePlus } from "lucide-react";

export default function CreateEventListItem() {
  return (
    <NavLink to="/create-event" style={{ textDecoration: "none" }}>
      <CreateEventListItemContainer>
        <PlusIconContainer>
          <CirclePlus size={48} />
        </PlusIconContainer>
        <CreateEventText>Create an event</CreateEventText>
      </CreateEventListItemContainer>
    </NavLink>
  );
}
