import "../styles/EventForm.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EventForm() {

    const [ eventTitle, setEventTitle ] = useState("")
    const [ eventImage, setEventImage ] = useState("")
    const [ eventStartTime, setEventStartTime ] = useState("")
    const [ eventEndTime, setEventEndTime ] = useState("")
    const [ eventDescription, setEventDescription ] = useState("")
    const [ eventLocation, setEventLocation ] = useState("")

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const new_event = {
            title: eventTitle,
            image: eventImage,
            location: eventLocation,
            description: eventDescription,
            start_time: eventStartTime,
            end_time: eventEndTime
        }

        fetch("http://localhost:5555/events", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_event)
        })
        .then(res => res.json())
        // .then(data => setStores([...stores, data]))
        .then(() => {
            event.target.reset()

            navigate('/dashboard');
        })
    }

    return (
        <div>
            <Link to="/dashboard">x</Link>
            <form class="create-event-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    class="new-event-inputs"
                    name="new-event-title"
                    placeholder="What's your event title?"
                    onChange={event => {setEventTitle(event.target.value)}}
                    value={eventTitle}
                    required>
                </input>
                <label for="new-event-image">Upload an image:</label>
                <input 
                    type="file"
                    class="new-event-inputs"
                    name="new-event-image"
                    accept="image/png, image/jpeg"
                    onChange={event => {setEventImage(event.target.value)}}
                    value={eventImage}>
                </input>
                {/* <label for="new-event-date">When is your event?</label> */}
                <input
                    class="new-event-inputs"
                    name="new-event-start"
                    type="datetime-local"
                    step={60}
                    onChange={event => {setEventStartTime(event.target.value)}}
                    value={eventStartTime}
                    required>
                </input>
                <input
                    class="new-event-inputs"
                    name="new-event-end"
                    type="datetime-local"
                    step={60}
                    onChange={event => {setEventEndTime(event.target.value)}}
                    value={eventEndTime}
                    min={eventStartTime}
                    required>
                </input>
                {/* <label for="new-event-date"></label> */}
                <input
                    class="new-event-inputs"
                    name="new-event-location"
                    type="text"
                    onChange={event => {setEventLocation(event.target.value)}}
                    placeholder="Where is your event?"
                    value={eventLocation}>
                </input>
                <textarea
                    class="new-event-inputs"
                    name="new-event-description"
                    placeholder="Enter event description here"
                    cols="50"
                    rows="5"
                    onChange={event => {setEventDescription(event.target.value)}}
                    value={eventDescription}>
                </textarea>
                <input type="submit" value="Let's bash!"></input>
            </form>
        </div>
    )
};

export default EventForm;