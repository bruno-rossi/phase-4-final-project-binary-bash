import '../styles/signup.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Signup() {
  const [newData, setNewData] = useState([])
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confimedPass, setConfimedPass] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/new_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        confimedPass
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error ('Failed to create user')
    })
    .then(newUser => {
      setNewData([...newData, newUser])
      navigate('/dashboard')
    })
    .catch(error => {
      console.log(error)
    }) 
  }


  return (
    <div className="signup-container">
      <div className='form-container'>
        <h1>Sign Up</h1>

        <form className='signup-form' onSubmit={handleSubmit}>

          <label htmlFor = 'username'>Username:</label>
          <input 
          type ='text' 
          name='username' 
          id='username-textfield' 
          value={username}
          onChange={event => setUserName(event.target.value)}
          required
          />

          <label htmlFor = 'password'>Password:</label>
          <input 
          type ='password' 
          name='password' 
          id='password-textfield' 
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
          />

          <label htmlFor = 're-enter-pass'>Re-enter Password:</label>
          <input 
          type ='password' 
          name='re-enter-pass' 
          id='re-enter-textfield'
          value={confimedPass}
          onChange={event => setConfimedPass(event.target.value)} 
          required
          />

          <input type='submit' placeholder='Sign Up' id='submit-btn'/>
        </form>

        <hr />

        <div className='terms-conditions'>
          <label htmlFor = 'check'>By creating an account, you agree with our terms and conditions.</label>
          <input type='checkbox' name='check'/>
        </div>
        
        <p>Already have an account? <NavLink to = '/login'>Login</NavLink></p>
      </div>
    </div>
  )
};

export default Signup;