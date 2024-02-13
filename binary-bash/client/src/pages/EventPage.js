// import "../styles/EventPage.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EventActivityPhotoCard from "../components/EventActivityPhotoCard";

function EventPage() {
    const params = useParams();
    console.log(params);

    const [ event, setEvent ] = useState({})
    const [ guests, setGuests ] = useState([])
    const [ host, setHost ] = useState("")

    // Fetch event details
    useEffect(() => {
        fetch(`http://localhost:5555/events/${params.id}`)
        .then(res => res.json())
        .then(event => setEvent(event))
    }, [])

    // Fetch list of guests
    useEffect(() => {
        fetch(`http://localhost:5555/events/${params.id}/guests`)
        .then(res => res.json())
        .then(guests => setGuests(guests))
    }, [])

    // Fetch event host
    useEffect(() => {
        fetch(`http://localhost:5555/events/${params.id}/host`)
        .then(res => res.json())
        .then(host => setHost(host))
    }, [])

    // console.log(event)

    return (
        <div className="event-page">
            <div className="event-page-container">
                <h1>{event.title}</h1>
                <img className="event-page-image" src={event.image} />
                <h3>Time: {event.start_time} - {event.end_time}</h3>
                <p>Hosted by: {host}</p>
                <h3>Where: {event.location}</h3>
                <p>{event.description}</p>
                <h3>{guests.length} Going</h3>
                {guests ? guests.map(guest => <p>{guest}</p>) : <p>Add guests to your bash!</p>}

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