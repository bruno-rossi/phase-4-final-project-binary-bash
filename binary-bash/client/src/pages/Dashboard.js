import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "./Dashboard.css"

function Dashboard() {

    const [ events, setEvents ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/events")
        .then(res => res.json())
        .then(events => setEvents(events))
    }, [])

    return (
        <div class="dashboard">
            <h1>Upcoming Events</h1>
            <div class="event-cards">
                {events.map(event => <EventCard key={event.id} event={event} />)}
            </div>
            
        </div>
      );
};

export default Dashboard;