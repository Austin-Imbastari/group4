import { useEffect, useState } from "react";
import EventListItem from "../../components/event_list_item/EventListItem";
import {
  getEventsHostedByCurrentUser,
  getEventsAttendingByCurrentUser,
  getCurrentUserName,
} from "../../lib/parseService";
import {
  EventContainersWrapper,
  EventContainer,
  ProfilePageWrapper,
} from "./ProfileSC";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import CreateEventListItem from "../../components/event_list_item/CreateEventListItem";

export default function Profile() {
  const [eventsHosting, setEventsHosting] = useState([]);
  const [eventsAttending, setEventsAttending] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadEvents() {
      try {
        const hosting = await getEventsHostedByCurrentUser();
        const attending = await getEventsAttendingByCurrentUser();
        const currentUsername = await getCurrentUserName();
        setEventsHosting(hosting);
        setEventsAttending(attending);
        setUsername(currentUsername);
        setLoading(false);
      } catch {
        setMessage("Failed to load hosted events.");
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <ProfilePageWrapper>
      <h1>Welcome, {username}!</h1>
      <NavLink to="/auth/signout">
        <Button>Sign Out</Button>
      </NavLink>
      <EventContainersWrapper>
        <EventContainer>
          <h2>Events You're Hosting</h2>
          {message && <p>{message}</p>}
          {eventsHosting.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
          <CreateEventListItem />
        </EventContainer>
        <EventContainer>
          <h2>Events You're Attending</h2>
          {message && <p>{message}</p>}
          {eventsAttending.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
        </EventContainer>
      </EventContainersWrapper>
    </ProfilePageWrapper>
  );
}
