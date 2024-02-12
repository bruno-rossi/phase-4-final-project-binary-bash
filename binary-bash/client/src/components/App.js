// import '../styles/App.css';
import '../styles/styles.css';
import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate, NavLink } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import EventCard from './EventCard';
import EventForm from './EventForm';

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("http://localhost:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Outlet context={{user: user, setUser: setUser}}/>
        <Footer />
    </div>
  );
}

export default App;
