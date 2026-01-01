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
import { getAllEvents, getCurrentUser, getAllActivityTypes } from "../../lib/parseService";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import Event from "./Event";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activityTypes, setActivityTypes] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const user = await getCurrentUser();
        setIsLoggedIn(!!user);

        const data = await getAllEvents();
        setEvents(data);
        setAllEvents(data);

        const types = await getAllActivityTypes();
        setActivityTypes(types);
      } catch (e) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  function handleFilter({ zip, categoryId }) {
    setEvents(
      allEvents.filter(e =>
        (!zip || String(e.zip) === String(zip)) &&
        (!categoryId || e.activityTypeId === categoryId)
      )
    );
  }

  return (
    <AllEventsPageContainer>
      <Filter activityTypes={activityTypes} onFilter={handleFilter} />
      <EventCards>
        <NavLink to={isLoggedIn ? "/create-event" : "/auth/signin"}
          state={!isLoggedIn ? { fromCreateEvent: true } : undefined}>
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
