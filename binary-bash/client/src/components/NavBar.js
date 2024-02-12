import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar() {
  return (
      <div className='navbar-container'>
        <div className='left-nav'>
          <NavLink to='/'><h1>binaryBash</h1></NavLink>
          <NavLink to='/dashboard'><h3>myBashes</h3></NavLink>
        </div>

        <div className="button-group">
          <NavLink to='/login'><button>Login</button></NavLink>
          <NavLink to='/signup'><button>Signup</button></NavLink>
        </div>
      </div>
  )
};

export default NavBar;