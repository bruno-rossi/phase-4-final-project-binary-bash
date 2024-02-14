import { NavLink, useNavigate } from 'react-router-dom'
// import '../styles/navbar.css'

function NavBar({user, setUser}) {

  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("http://localhost:5555/logout", { method: "DELETE", credentials: 'include' }).then((r) => {
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
            <NavLink onClick={handleLogoutClick}><button>Logout</button></NavLink>
          </div>
        ) : (
        <div className="button-group">
          <NavLink to='/login'><button>Login</button></NavLink>
          <NavLink to='/signup'><button>Signup</button></NavLink>
        </div>
        )}
      </div>
  )
};

export default NavBar;