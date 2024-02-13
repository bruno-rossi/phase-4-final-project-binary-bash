import "../styles/EventForm.css"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker'

function EventForm() {

    const [ eventTitle, setEventTitle ] = useState("")
    const [ eventImage, setEventImage ] = useState("")
    const [ eventStartTime, setEventStartTime ] = useState("")
    const [ eventEndTime, setEventEndTime ] = useState("")
    const [ eventDescription, setEventDescription ] = useState("")
    const [ eventLocation, setEventLocation ] = useState("")
    const [ imagePreview, setImagePreview ] = useState("")

    const navigate = useNavigate();

    function handleFileChange(event) {
        event.preventDefault();
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(selectedFile);
        }
        setEventImage(selectedFile);
      };

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", eventTitle);
        formData.append("image", eventImage);
        formData.append("location", eventLocation);
        formData.append("description", eventDescription);
        formData.append("start_time", eventStartTime);
        formData.append("end_time", eventEndTime);
        
        fetch("http://localhost:5555/events", {
          method: "POST",
          body: formData
        })
        
        .then(res => res.json())
        // .then(data => setStores([...stores, data]))
        .then(() => {
            event.target.reset()

            navigate('/dashboard');
        })
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <Link to="/dashboard" className="go-back">Go Back</Link>
                <h1>New Event</h1>
                <form className="create-event-form" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="new-event-inputs"
                        name="new-event-title"
                        placeholder="Untitled Event"
                        onChange={event => {setEventTitle(event.target.value)}}
                        value={eventTitle}
                        required>
                    </input>

                    {imagePreview && 
                        <div className="preview-image">
                            <h2>Image Preview:</h2>
                            <img src={imagePreview} style={{maxWidth: '400px'}} />
                        </div> 
                    }
                
                    <input 
                        type="file"
                        className="new-event-inputs"
                        name="new-event-image"
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}>
                    </input>

                    <h3>Start Date</h3>
                    <DatePicker 
                    className="date-picker"
                    selected={eventStartTime} 
                    onChange={date => setEventStartTime(date)} 
                    dateFormat="MMMM Do YYYY, h:mm:ss a"
                    showTimeSelect
                    placeholderText="Start Date" 
                    required
                    />

                    <h3>End Date</h3>
                    <DatePicker 
                    className="date-picker"
                    selected={eventEndTime} 
                    onChange={date => setEventEndTime(date)} 
                    dateFormat="MMMM Do YYYY, h:mm:ss a"
                    showTimeSelect
                    placeholderText="End Time"
                    required
                    />
                    {/* <label for="new-event-date"></label> */}
                    <input
                        className="new-event-inputs"
                        name="new-event-location"
                        type="text"
                        onChange={event => {setEventLocation(event.target.value)}}
                        placeholder="Where is your event?"
                        value={eventLocation}>
                    </input>
                    <textarea
                        className="new-event-inputs"
                        name="new-event-description"
                        placeholder="Enter event description here"
                        cols="50"
                        rows="5"
                        onChange={event => {setEventDescription(event.target.value)}}
                        value={eventDescription}>
                    </textarea>
                    <input type="submit" value="Let's bash!" id='submit-btn'></input>
                </form>
            </div>
        </div>   
    )
};

export default EventForm;