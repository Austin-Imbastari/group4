import eventData from "../../mockData/events";
import React from "react";
import Filter from "./Filter";
import { NavLink } from "react-router-dom";
import {
  AllEventsPageContainer,
  EventCards,
  EventContainer,
  EventTopContainer,
  EventCenterContainer,
  EventBottomContainer,
  NewEventContainer,
} from "./AllEventSC";
import { CirclePlus } from "lucide-react";

export default function AllEvents() {

    const [event, setEvent] = React.useState(eventData)

    function filter(FilterData) {
        const dayFilter = formData.get("eventDay")
        const distanceFilter = formData.get("eventDistance")
    }

    return (
        <AllEventsPageContainer>
            <Filter />
            <EventCards>
                <NavLink to="/createevent">
                    <EventContainer>
                        <NewEventContainer>
                            <CirclePlus className="icon-circle" />
                            <span>Create an Event</span>
                        </NewEventContainer>
                    </EventContainer>
                </NavLink>
                {event.map((e) => {

                    return (
                        <NavLink key={e.id} to={"/events/" + e.id} style={{ textDecoration: "none" }}>
                            <EventContainer>
                                <EventTopContainer $bg={e.picture}>
                                    <span>{e.category}</span>
                                    <span>{e.saved ? ":)" : ":("}</span>
                                </EventTopContainer>
                                <EventCenterContainer>
                                    <span>{e.title}</span>
                                </EventCenterContainer>
                                <EventBottomContainer>
                                    <span>[ . ] By: {e.host} </span>
                                    <span className="span2"> {e.date} * {e.attendents} Attendents</span>
                                </EventBottomContainer>
                            </EventContainer>
                        </NavLink>
                    )
                })}
            </EventCards>
        </AllEventsPageContainer >
    )
}
