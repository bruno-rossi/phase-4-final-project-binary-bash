import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
// import "../styles/Dashboard.css"
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import EmptyCard from "../components/EmptyCard";

function Dashboard() {

    const [ events, setEvents ] = useState([])

    const { user, setUser } = useOutletContext();

    const navigate = useNavigate()

    useEffect(() => {

        if (!user) {
            navigate('/login');
        } else {
            fetch(`http://127.0.0.1:5555/users/${user.id}/events`)
            .then(res => res.json())
            .then(data => {
                const events_array = data.events.map(item => item.event)
                setEvents(events_array);
        })
        }
        
    }, [])
    
    if (events.length === 0) {
        return (
            <div className="dashboard">
                <div className="dashboard-info">
                    <h1>Upcoming Events</h1>
                    <h2>You don't have any events.</h2>
                    <EmptyCard />
                </div>
            </div>
        )
    } else {
        return (
            <div className="dashboard">
                <div className="dashboard-info">
                    <h1>Upcoming Events</h1>
                    <h2>You have {events.length} events.</h2>
                    {/* <Link to="/create-event/">Create a new event</Link> */}
                </div>
                <div className="event-cards">
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