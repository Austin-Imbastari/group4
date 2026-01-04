import {
  ParentContainer,
  ImageContainer,
  ModalContainer,
} from "./EventsDetailsSC.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import BackButton from "../../components/button/BackButton.jsx";
import { useState } from "react";
import {
  getEventByID,
  toggleAttendance,
  getAttendanceForCurrentUser,
} from "../../lib/parseService.js";
import { useEffect } from "react";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isAttending, setIsAttending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    async function loadEvent() {
      try {
        setLoading(true);
        const data = await getEventByID(id);
        setEvent(data);
      } catch (error) {
        console.error(error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    }
    loadEvent();
  }, [id, navigate]);

  useEffect(() => {
    async function loadAttendance() {
      const status = await getAttendanceForCurrentUser(id);
      setIsAttending(status);
    }
    loadAttendance();
  }, [id]);

  const handleToggleAttendance = async () => {
    try {
      const result = await toggleAttendance(id);
      setIsAttending(result.isAttending);
      if (result.isAttending) {
        toggleModal();
      }
    } catch (error) {
      console.error("Failed to toggle attendance:", error);
      navigate("/auth/signin");
    }
  };

  if (loading) {
    return (
      <ParentContainer>
        <p>Loading event...</p>
      </ParentContainer>
    );
  }

  return (
    <ParentContainer>
      <BackButton type="button" onClick={() => navigate(-1)}>
        Back
      </BackButton>
      {event.picture && (
        <ImageContainer>
          <img src={event.picture} />
        </ImageContainer>
      )}
      <h1 className="event_title">{event.title}</h1>
      <p className="dateOfEvent">Date: {event.date}</p>
      <p className="organizer">By: {event.host}</p>
      <p className="attendees">Attendees: {event.attendees}</p>
      <p>{event.description}</p>
      <Button onClick={handleToggleAttendance}>
        {isAttending ? "Cancel Attendance" : "Attend"}
      </Button>
      {/* MODAL */}
      {modal && (
        <ModalContainer>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal}>
                ×
              </button>
              <h1>Would you like a reminder on mail?</h1>
              <Button onClick={toggleModal}>Get reminder</Button>
            </div>
          </div>
        </ModalContainer>
      )}
      <h2>Event Details:</h2>
      <div className="eventDetails">
        <div className="locationContainer">
          <p className="Detail">Location: </p>
          <p> {event.location}</p>
        </div>
        <div className="durationContainer">
          <p className="Detail">Duration: </p>
          <p> {event.time}</p>
        </div>
        <div className="priceContainer">
          <p className="Detail">Expected Price:</p>
          <p> {event.price}</p>
        </div>
      </div>
    </ParentContainer>
  );
}
