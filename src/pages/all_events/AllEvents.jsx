import { useState, useEffect, CSSProperties } from "react";
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
import LoadingSpinner from "../../components/loading/loadingSpinner";

export default function AllEvents() {
  const [state, setState] = useState({
    events: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getAllEvents();
        if (alive) setState((prev) => ({ ...prev, events: data }));
      } catch (e) {
        if (alive)
          setState((prev) => ({ ...prev, error: "Failed to load events" }));
      } finally {
        if (alive) setState((prev) => ({ ...prev, loading: false }));
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (state.loading) return <LoadingSpinner />;
  if (state.error) return <div>Error: {state.error}</div>;

  function filter(formData) {
    const dayFilter = formData.get("eventDay");
    const distanceFilter = formData.get("eventDistance");
    // TODO: setEvents(prev => apply filters)
  }

  return (
    <AllEventsPageContainer>
      <Filter />
      <EventCards>
        <NavLink to="/create-event">
          <EventContainer>
            <NewEventContainer>
              <CirclePlus className="icon-circle" />
              <span>Create an Event</span>
            </NewEventContainer>
          </EventContainer>
        </NavLink>
        {state.events.map((e) => {
          return (
            <NavLink
              key={e.id}
              to={`/events/${e.id}`}
              style={{ textDecoration: "none" }}
            >
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
                    {e.date} {e.time ? `@ ${e.time}` : ""} * {e.attendents}
                    Attendants
                  </span>
                </EventBottomContainer>
              </EventContainer>
            </NavLink>
          );
        })}
      </EventCards>
    </AllEventsPageContainer>
  );
}
