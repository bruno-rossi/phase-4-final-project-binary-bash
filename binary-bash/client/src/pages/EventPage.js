// import "../styles/EventPage.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EventActivityPhotoCard from "../components/EventActivityPhotoCard";

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
        <div className="event-page">
            <div className="event-page-container">
                <h1>{event.title}</h1>
                <img className="event-page-image" src={event.image} />
                <h3>Time: {event.start_time} - {event.end_time}</h3>
                <p>Hosted by: Bruno</p>
                <h3>Where: {event.location}</h3>
                <p>{event.description}</p>
                <h3>1 Going</h3>
                <p>Miguel Vasquez</p>

                <hr />

                <div className="photo-roll">
                    <h1>Photo Roll</h1>
                    <p>Add Your Photos here!</p>
                    <input type='file' />
                    <EventActivityPhotoCard />
                </div>
                
            </div>
        </div>
    )
};

export default EventPage;