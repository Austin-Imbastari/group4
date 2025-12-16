import { useEffect, useState } from "react";
import EventListItem from "../../components/event_list_item/EventListItem";
import { getEventsHostedByCurrentUser } from "../../lib/parseService";
import {
  EventContainersWrapper,
  EventContainer,
  ProfilePageWrapper,
} from "./ProfileSC";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";

export default function Profile() {
  const [eventsHosting, setEventsHosting] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function loadHostedEvents() {
      try {
        const events = await getEventsHostedByCurrentUser();
        setEventsHosting(events);
        setLoading(false);
      } catch {
        setMessage("Failed to load hosted events.");
        setLoading(false);
      }
    }
    loadHostedEvents();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <ProfilePageWrapper>
      <NavLink to="/auth/signout">
        <Button>Sign Out</Button>
      </NavLink>
      <EventContainersWrapper>
        <EventContainer>
          <h2>Events You're Hosting</h2>
          {message && <p>{message}</p>}
          {eventsHosting.length === 0 && <p>You are not hosting any events.</p>}
          {eventsHosting.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
        </EventContainer>
        <EventContainer>
          <h2>Events You're Attending</h2>
          <p>Feature coming soon!</p>
        </EventContainer>
      </EventContainersWrapper>
    </ProfilePageWrapper>
  );
}
