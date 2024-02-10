import '../styles/signup.css'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
    <div className="signup-container">
      <div className='form-container'>
        <h1>Sign Up</h1>
        <form className='signup-form'>
          <label htmlFor = 'username'>Username:</label>
          <input type ='text' name='username' id='username-textfield' required/>
          <label htmlFor = 'password'>Password:</label>
          <input type ='text' name='password' id='password-textfield' required/>
          <label htmlFor = 're-enter-pass'>Re-enter Password:</label>
          <input type ='text' name='re-enter-pass' id='re-enter-textfield' required/>
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