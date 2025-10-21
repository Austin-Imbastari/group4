import eventData from "./../mockData/events"
import React from "react"
import Event from "./Event"


export default function AllEvents() {

    const [event, setEvent] = React.useState(eventData)

    const eventsGrid = event.map((event) => (
        <Event
            key={event.id}
            picture={event.picture}
            category={event.category}
            title={event.title}
            host={event.host}
            date={event.data}
            attendents={event.attendents}
            saved={event.saved}
        />
    ))

    return (
        <main>
            <div className="event-container">
                {eventsGrid}
            </div>
        </main>
    )
}