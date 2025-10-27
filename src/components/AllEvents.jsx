import eventData from "./../mockData/events"
import React from "react"
import { NavLink } from "react-router-dom";
import { GrandParentContainer, ParentContainer, EventContainer, EventTopContainer, EventCenterContainer, EventBottomContainer, EventNewEventContainer } from "./AllEventSC";



export default function AllEvents() {

    const [event, setEvent] = React.useState(eventData)

    function filter(FilterData) {
        const dayFilter = formData.get("eventDay")
        const distanceFilter = formData.get("eventDistance")
    }

    return (
        <GrandParentContainer>
            <form className="navBar" action={filter}>
                <button>Search-icon</button>
                {/* dont know how to turn this into the correct symbol atm */}
                <label htmlFor="dayFilter"></label>
                <select id="eventDay" name="eventDay" defaultValue="" required>
                    <option value="Any" >Any day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <label htmlFor="distanceFilter"></label>
                <select id="eventDistance" name="eventDistance" defaultValue="" required>
                    <option value="Any" >Any distance</option>
                    <option value="5km">less than 5km</option>
                    <option value="10km">less than 10km</option>
                    <option value="15km">less than 15km</option>
                    <option value="20km">less than 20km</option>
                    <option value="25km">less than 25km</option>
                    <option value="50km">less than 50km</option>
                    <option value="100km">less than 100km</option>
                </select>
            </form>
            <ParentContainer>
                <EventContainer>
                    <EventNewEventContainer>
                        <EventTopContainer $bg="/createnewevent.jpg">
                        </EventTopContainer>
                        <span>Create new event</span>
                    </EventNewEventContainer>
                </EventContainer>
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
        </GrandParentContainer >
    )
}