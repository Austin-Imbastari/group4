import { useState, useEffect, CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
import {
  AllEventsPageContainer,
  EventCards,
  EventContainer,
  NewEventContainer,
} from "./AllEventSC";
import { CirclePlus } from "lucide-react";
import { getAllEvents } from "../../lib/parseService";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import Event from "./Event";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (e) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

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
        {events.map(e => (
          <Event key={e.id} event={e} />
        ))}
      </EventCards>
    </AllEventsPageContainer>
  );
}
