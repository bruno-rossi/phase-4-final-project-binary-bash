// import '../styles/signup.css'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import { useState } from 'react'


function Signup() {

  const {user, setUser} = useOutletContext();

  const [newData, setNewData] = useState([])
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confimedPass, setConfimedPass] = useState('')
  const [passwordValidate, setPasswordValidate] = useState('')
  const [usernameValidate, setUsernameValidate] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confimedPass) {
      setPasswordValidate('Passwords Must Match');
    } else {
      fetch('http://localhost:5555/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username,
          password
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 409) {
          setUsernameValidate('Username Already Exists');
          throw new Error('Username Already Exists');
        } else {
          throw new Error('Failed to create user');
        }
      })
      .then(newUser => {
        setNewData([...newData, newUser]);
        console.log(newUser);
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
    }
  }


  return (
    <div className="signup-container">
      <div className='form-container'>
        <h1>Sign Up</h1>

        <form className='signup-form' onSubmit={handleSubmit}>

          <label htmlFor = 'username'>* Username:</label>
          <input 
          type ='text' 
          name='username' 
          id='username-textfield' 
          value={username}
          onChange={event => setUserName(event.target.value)}
          required
          />
          <h5 className={usernameValidate ? "handle-form-error" : 'handle-form-hidden'}>{usernameValidate}</h5>

          <label htmlFor = 'password'>* Password:</label>
          <input 
          type ='password' 
          name='password' 
          id='password-textfield' 
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
          />

          <label htmlFor = 're-enter-pass'>* Confirm Password:</label>
          <input 
          type ='password' 
          name='re-enter-pass' 
          id='re-enter-textfield'
          value={confimedPass}
          onChange={event => setConfimedPass(event.target.value)} 
          required
          />

          <h5 className={passwordValidate ? "handle-form-error" : 'handle-form-hidden'}>{passwordValidate}</h5>
          <input type='submit' placeholder='Sign Up' id='submit-btn'/>
        </form>

        <hr />

        <div className='terms-conditions'>
          <label htmlFor = 'check'>By creating an account, you agree with our terms and conditions.</label>
        </div>
        <p>Already have an account? <NavLink to = '/login'>Login</NavLink></p>
      </div>
    </div>
  )
};

export default Signup;