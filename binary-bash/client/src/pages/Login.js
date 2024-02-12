import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from 'react'
// import '../styles/login.css'

function Login() {

  const {user, setUser} = useOutletContext();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => { setUser(user); navigate('/dashboard') });
      }
    });
  }

  return (
    <div className="login-container">
      <div className='form-container'>
        <h1>Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>

          <label htmlFor = 'username'>Username:</label>
          <input 
          type ='text' 
          name='username' 
          id='username-textfield' 
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
          />

          <label htmlFor = 'password'>Password:</label>
          <input 
          type ='password' 
          name='password' 
          id='password-textfield' 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          />

          <input type='submit' placeholder='Sign Up' id='submit-btn'/>
        </form>

        {/* <hr /> */}

        {/* <div className='terms-conditions'>
          <label htmlFor = 'check'>By creating an account, you agree with our terms and conditions.</label>
          <input type='checkbox' name='check'/>
        </div> */}
        
        <p>Don't have an account? <NavLink to = '/signup'>Sign up</NavLink></p>
      </div>
    </div>
  )
};

export default Login;