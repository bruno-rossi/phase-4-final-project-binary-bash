// import '../styles/App.css';
import '../styles/styles.css';
import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate, NavLink } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import EventCard from './EventCard';
import EventForm from './EventForm';

function App() {

  return (
    <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
