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
  const [ isDarkMode, setIsDarkMode ] = useState(false)

  function handleclick() {
    setIsDarkMode(prevVal => !prevVal)
  }

  const themeclass = isDarkMode ? 'dark-theme' : 'light-theme';

  useEffect(() => {
    // auto-login
    fetch("http://localhost:5555/check_session", {
      credentials: 'include',
    }).then((response) => {
      if (response.ok) {
        response.json().then(fetched_user => setUser(fetched_user));
      }
    });
  }, []);

  console.log(user)

  return (
    <div className={`App ${themeclass}`}>
        <NavBar user={user} setUser={setUser} />
        <Outlet context={{user: user, setUser: setUser}}/>
        <button className='toggle-btn' onClick={handleclick}>{isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}</button>
        <Footer />
    </div>
  );
}

export default App;
