import "../styles/EventPage.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function EventPage() {
    const params = useParams();
    console.log(params);

    const [ event, setEvent ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5555/events/${params.id}`)
        .then(res => res.json())
        .then(event => setEvent(event))
    }, [])

    console.log(event)

    return (
        <div class="event-page-container">
            <h1>{event.title}</h1>
            <img class="event-page-image" src={event.image} />
            <h3>Time: {event.start_time} - {event.end_time}</h3>
            <h3>Where: {event.location}</h3>
            <p>{event.description}</p>
        </div>
    )
};

export default EventPage;