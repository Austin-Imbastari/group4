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
  HeaderContainer,
  Username,
  HeaderText,
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
      <HeaderContainer>
        <h1>
          Welcome, <Username>{username}!</Username>
        </h1>
        <HeaderText>
          This is your profile page. Here you can see the events you’re hosting
          and the events you’re attending. If you want to sign out, you can
          click the button below.
        </HeaderText>
        <NavLink to="/auth/signout">
          <Button>Sign Out</Button>
        </NavLink>
      </HeaderContainer>
      <EventContainersWrapper>
        <EventContainer>
          <h2>Hosting</h2>
          {message && <p>{message}</p>}
          {eventsHosting.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
          <CreateEventListItem />
        </EventContainer>
        <EventContainer>
          <h2>Attending</h2>
          {message && <p>{message}</p>}
          {eventsAttending.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
        </EventContainer>
      </EventContainersWrapper>
    </ProfilePageWrapper>
  );
}
