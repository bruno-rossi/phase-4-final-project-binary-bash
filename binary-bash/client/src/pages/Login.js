import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../styles/login.css'

function Login() {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error ("username doesn't exists")
    })
    .then(user => {
      setData([...data, user])
      navigate('/dashboard')
    })
    .catch(error => {
      console.log(error)
    })
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
          type ='text' 
          name='password' 
          id='password-textfield' 
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