import { Link } from "react-router-dom";
import "../styles/EventCard.css";

function EventCard({event}) {

    return (
        <div className="event-card">
            <h1>{event.title}</h1>
            <img src={event.image} />
            <p>{event.date}</p>
            <p>{event.start_time} - {event.end_time}</p>
            <Link to={`/events/${event.id}`} >Details</Link>
        </div>
    )
};

export default EventCard;