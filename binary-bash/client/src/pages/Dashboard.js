import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "./Dashboard.css"
import { Link } from "react-router-dom";

function Dashboard() {

    const [ events, setEvents ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/events")
        .then(res => res.json())
        .then(events => setEvents(events))
    }, [])

    return (
        <div class="dashboard">
            <div class="dashboard-info">
                <h1>Upcoming Events</h1>
                <h2>You have {events.length} events.</h2>
                <Link to="/create-event/">Create a new event</Link>
            </div>
            <div class="event-cards">
                {events.map(event => 
                        <EventCard key={event.id} event={event} />
                )}
            </div>
            
        </div>
      );
};

export default Dashboard;