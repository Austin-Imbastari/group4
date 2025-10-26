import eventData from "./../mockData/events"
import React from "react"
import { NavLink } from "react-router-dom";
import { ParentContainer, EventContainer, EventTopContainer, EventCenterContainer, EventBottomContainer } from "./AllEventSC";



export default function AllEvents() {

    const [event, setEvent] = React.useState(eventData)

    return (
        <ParentContainer>
            {event.map((e) => {
                return (
                    <NavLink to="/" style={{ textDecoration: "none" }}>
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

        </ParentContainer>
    )
}