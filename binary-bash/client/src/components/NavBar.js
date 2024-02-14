import { NavLink, useNavigate } from 'react-router-dom'
// import '../styles/navbar.css'

function NavBar({user, setUser, handleclick, isDarkMode }) {

  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("http://localhost:5555/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate('/login')
      }
    });
  }

  return (
      <div className='navbar-container'>
        <div className='left-nav'>
          <NavLink to='/'><h1>binaryBash</h1></NavLink>

          {user ? (<NavLink to='/dashboard'><h3>myBashes</h3></NavLink>) : null}
          
        </div>

        {user ? (
          <div className="button-group">
             <button className='toggle-btn' onClick={handleclick}>{isDarkMode ? '☀️' : '🌙'}</button>
            <NavLink onClick={handleLogoutClick}><button>Logout</button></NavLink>
          </div>
        ) : (
        <div className="button-group">
          <button className='toggle-btn' onClick={handleclick}>{isDarkMode ? '☀️' : '🌙'}</button>
          <NavLink to='/login'><button>Login</button></NavLink>
          <NavLink to='/signup'><button>Signup</button></NavLink>
        </div>
        )}
      </div>
  )
};

export default NavBar;