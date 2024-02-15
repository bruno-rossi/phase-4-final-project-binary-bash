// import "../styles/EventPage.css"
import { useParams } from "react-router-dom";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EventActivityPhotoCard from "../components/EventActivityPhotoCard";

function EventPage() {
    const params = useParams();
    // console.log(params);

    const [ event, setEvent ] = useState({})
    const [ guests, setGuests ] = useState([])
    const [ host, setHost ] = useState("")
    const { user, setUser } = useOutletContext();

    const navigate = useNavigate();

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

    function handleRSVP() {

        if (!guests.includes(user.username)) {
            fetch(`http://localhost:5555/events/${event.id}/users/${user.id}`, {
            method: 'POST'
            })
            .then(res => res.json())
            .then(() => setGuests([...guests, user.username]))
        } else if (guests.includes(user.username)) {

            const guest_index = guests.indexOf(user.username);
            const new_guest_list = guests.toSpliced(guest_index, 1)

            fetch(`http://localhost:5555/events/${event.id}/users/${user.id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => setGuests(new_guest_list))
        }
    }

    return (
        <div className="event-page">
            <div className="event-page-container">
                <h1>{event.title}</h1>
                <img className="event-page-image" src={`/image/${event.image}`} alt={event.title} />
                <h3>Time: {event.start_time} - {event.end_time}</h3>
                <p>Hosted by: {host}</p>
                <h3>Where: {event.location}</h3>
                <p>{event.description}</p>
                <h3>{guests.length} Going</h3>
                {guests ? guests.map(guest => <p key={guest}>{guest}</p>) : <p>There are no guests yet.</p>}

                {/* <Link onClick={handleRSVP}><button>{rsvp ? "Not going" : "Going"}</button></Link> */}
                {/* {!user ? <Link onClick={handleRSVP}><button className="rsvp-button">Going</button></Link> : null} */}
                {user && (user.username != host) ? 
                <Link onClick={handleRSVP}><button className="rsvp-button">{guests.includes(user.username) ? "Not going" : "Going"}</button></Link>
                : 
                null
                }

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