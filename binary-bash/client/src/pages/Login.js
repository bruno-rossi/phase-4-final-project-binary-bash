import { NavLink } from "react-router-dom";
import '../styles/login.css'

function Login() {
  return (
    <div className="login-container">
      <div className='form-container'>
        <h1>Log In</h1>
        <form>
          <label htmlFor = 'username'>Username:</label>
          <input type ='text' name='username' id='username-textfield' required/>
          <label htmlFor = 'password'>Password:</label>
          <input type ='text' name='password' id='password-textfield' required/>
          <input type='submit' placeholder='Sign Up' id='submit-btn'/>
        </form>

        <hr />

        <div className='terms-conditions'>
          <label htmlFor = 'check'>By creating an account, you agree with our terms and conditions.</label>
          <input type='checkbox' name='check'/>
        </div>
        
        <p>Don't have an account? <NavLink to = '/signup'>Sign up</NavLink></p>
      </div>
    </div>
  )
};

export default Login;