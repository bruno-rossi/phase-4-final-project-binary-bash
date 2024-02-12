import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
// import "../styles/Dashboard.css"
import { Link, useOutletContext } from "react-router-dom";
import EmptyCard from "../components/EmptyCard";

function Dashboard() {

    const [ events, setEvents ] = useState([])

    const { user, setUser } = useOutletContext();

    useEffect(() => {
        fetch("http://127.0.0.1:5555/events")
        .then(res => res.json())
        .then(events => setEvents(events))
    }, [])

    if (events.length === 0) {
        return (
            <div class="dashboard">
                <div class="dashboard-info">
                    <h1>Upcoming Events</h1>
                    <h2>You don't have any events.</h2>
                    <EmptyCard />
                </div>
            </div>
        )
    } else {
        return (
            <div class="dashboard">
                <div class="dashboard-info">
                    <h1>Upcoming Events</h1>
                    <h2>You have {events.length} events.</h2>
                    {/* <Link to="/create-event/">Create a new event</Link> */}
                </div>
                <div class="event-cards">
                    {events.map(event => 
                            <EventCard key={event.id} event={event} />
                    )}
                    <EmptyCard />
                </div>
                
            </div>
          );
    }
};

export default Dashboard;