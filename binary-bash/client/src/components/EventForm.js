import "./EventForm.css"
import { useState } from "react";

function EventForm() {

    const [ eventTitle, setEventTitle ] = useState("")
    const [ eventImage, setEventImage ] = useState("")
    const [ eventDate, setEventDate ] = useState("")
    const [ eventLocation, setEventLocation ] = useState("")
    const [ eventDescription, setEventDescription ] = useState("")

    function handleSubmit(event) {
        event.preventDefault();

        const new_event = {
            title: eventTitle,
            image: eventImage,
            location: eventLocation,
            description: eventDescription,
            date_time: eventDate
        }

        fetch("http://localhost:3000/events", {
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
            setEventTitle("");
            setEventDate("");
            setEventLocation("");
            setEventDescription("");
        })
    }

    return (
        <div>
            <form id="create-event-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    class="new-event-inputs"
                    name="new-event-title"
                    placeholder="What's your event title?"
                    onChange={event => {setEventTitle(event.target.value)}}
                    value={eventTitle}>
                </input>
                <label for="new-event-image">Upload an image:</label>
                <input 
                    type="file"
                    class="new-event-inputs"
                    name="new-event-image"
                    accept="image/png, image/jpeg">
                </input>
                {/* <label for="new-event-date">When is your event?</label> */}
                <input
                    class="new-event-inputs"
                    name="new-event-date"
                    type="datetime-local"
                    onChange={event => {setEventDate(event.target.value)}}
                    value={eventDate}>
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