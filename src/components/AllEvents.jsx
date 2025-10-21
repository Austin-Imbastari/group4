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
                    <NavLink to="/">
                        <EventContainer>
                            <EventTopContainer $bg={e.picture}>
                                <span>{e.category}</span>
                                <span>{e.saved ? ":)" : ":("}</span>
                            </EventTopContainer>
                            <EventCenterContainer>
                                <span>{e.title}</span>
                            </EventCenterContainer>
                            <EventBottomContainer>
                                <span>{e.host} </span>
                                <span> {e.date} </span>
                                <span> {e.attendents}</span>
                            </EventBottomContainer>
                        </EventContainer>
                    </NavLink>


                )
            })}

        </ParentContainer>
    )
}