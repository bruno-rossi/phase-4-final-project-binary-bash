import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import "../styles/EventCard.css";

function EventCard({event}) {

    // console.log(event.image)
    const [ host, setHost ] = useState("");

    console.log(host);

    // Fetch event host
    useEffect(() => {
        fetch(`http://localhost:5555/events/${event.id}/host`)
        .then(res => res.json())
        .then(host => setHost(host))
    }, [])

    return (
        <Link to={`/events/${event.id}`} className="event-card">
            <div>
                <img src={`image/${event.image}`} alt={event.title} />
                <h1>{event.title}</h1>
                <p className="hosted-by">Hosted by {host}</p>
                <p>{event.date}</p>
                <p>{event.start_time}</p>
                <p>—</p>
                <p>{event.end_time}</p>
            </div>
        </Link>
    )
};

export default EventCard;