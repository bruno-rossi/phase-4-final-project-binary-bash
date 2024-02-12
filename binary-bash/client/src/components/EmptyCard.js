import { Link } from "react-router-dom";
// import "../styles/EventCard.css";

function EmptyCard() {

    return (
      <Link to="/create-event/" className="empty-event-card">
        <div>
          <h1>Create New Event</h1>
          <p className="empty-add-symbol">+</p>
        </div>
      </Link>
    )
};

export default EmptyCard;