import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Singup() {
  return (
    <>
      <h1>Please tell us a little about you!</h1>
      
      <div className='form-container'>
        <form className='form'>
          <p>
            <input type="text" id="name" name="name" placeholder="Dispaly Name" required />
          </p>
          <p>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </p>
          <p>
            <input type="password" id="password" name="password" placeholder="Password" required />
          </p>

          <p>
            <input type="password" id="passwordchk" name="passwordchk" placeholder="Password Again" required />
          </p>
          <div className='button-container'>
            <div className='buttons'>
              <button className="btn-signup" type="submit" id="signup" value="signup" >Signup </button>
              <Link to="/Login">
                <button className="btn-login" type="submit" id="login" value="Login" > Login </button>
              </Link>
            </div>
          </div>
        </form>
      </div>


    </>
  )
}

export default Singup