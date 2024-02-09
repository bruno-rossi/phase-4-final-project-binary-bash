import '../styles/signup.css'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
    <div className="signup-container">
      <div className='form-container'>
        <form>
          <label htmlFor = 'username'>Username:</label>
          <input type ='text' name='username' id='username-textfield'/>
          <label htmlFor = 'password'>Password:</label>
          <input type ='text' name='password' id='password-textfield'/>
          <input type='submit' placeholder='Sign Up' id='submit-btn'/>
        </form>

        <label htmlFor = 'check'>By creating an account, you agree with our terms and conditions.</label>
        <input type='checkbox' name='check'/>
        <p>Already have an account? <NavLink to = '/login'>Login Here</NavLink></p>
      </div>
    </div>
  )
};

export default Signup;