import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar() {
  return (
    <div className='navbar-container'>
      <NavLink to='/'><h1>binaryBash</h1></NavLink>
      <NavLink to='/dashboard'><h3>myBashes</h3></NavLink>
    </div>
  )
};

export default NavBar;