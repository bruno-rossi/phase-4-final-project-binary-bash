import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard({event}) {

    return (
        <div className="event-card">
            <h1>{event.title}</h1>
            <img src={event.image} />
            <p>{event.date_time}</p>
            <Link to={`/events/${event.id}`} >Event details</Link>
        </div>
    )
};

export default EventCard;