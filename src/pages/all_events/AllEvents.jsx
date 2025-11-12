import React from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
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
import { getAllEvents } from "../../lib/parseService";

export default function AllEvents() {

    const [events, setEvents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        let alive = true;
        (async () => {
            try {
                const data = await getAllEvents();
                if (alive) setEvents(data);
            } catch (e) {
                if (alive) setError(e?.message || "Failed to load events");
            } finally {
                if (alive) setLoading(false);
            }
        })();
        return () => { alive = false; };
    }, []);

    if (loading) return <div>Loading…</div>;
    if (error) return <div>Error: {error}</div>;

    function filter(FilterData) {
        const dayFilter = formData.get("eventDay")
        const distanceFilter = formData.get("eventDistance")
        // TODO: setEvents(prev => apply filters)
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
                {events.map((e) => {

                    return (
                        <NavLink key={e.id} to={`/events/${e.id}`} style={{ textDecoration: "none" }}>
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
                                    <span className="span2">
                                        {e.date} {e.time ? `@ ${e.time}` : ""} * {e.attendents} Attendants
                                    </span>
                                </EventBottomContainer>
                            </EventContainer>
                        </NavLink>
                    )
                })}
            </EventCards>
        </AllEventsPageContainer >
    )
}
