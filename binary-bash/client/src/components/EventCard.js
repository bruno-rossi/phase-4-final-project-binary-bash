import { Link } from "react-router-dom";
// import "../styles/EventCard.css";

function EventCard({event}) {

    console.log(event.image)
    return (
        <Link to={`/events/${event.id}`} className="event-card">
            <div>
                <img src={`${event.image}`} />
                <h1>{event.title}</h1>
                <p className="hosted-by">Hosted by *name*</p>
                <p>{event.date}</p>
                <p>{event.start_time} - {event.end_time}</p>
                {/* <Link to={`/events/${event.id}`} >Details</Link> */}
            </div>
        </Link>
    )
};

export default EventCard;