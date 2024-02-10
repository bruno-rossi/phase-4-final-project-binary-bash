import "./EventPage.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function EventPage() {
    const params = useParams();
    console.log(params);

    const [ event, setEvent ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/events/${params.id}`)
        .then(res => res.json())
        .then(event => setEvent(event))
    }, [])

    console.log(event)

    return (
        <div>
            <h1>{event.title}</h1>
            <img src={event.image} />
            <h2>{event.date}</h2>
            <h3>{event.start_time} - {event.end_time}</h3>
            <h3>{event.location}</h3>
            <p>{event.description}</p>
        </div>
    )
};

export default EventPage;