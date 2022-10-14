import React from 'react'
import { useState , useEffect} from "react";
import './user.css'

import { Link } from 'react-router-dom';

function User() {

  const [showinfo, setshowinfo] = useState(false);

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    // Redirect
  } else {
    return (
      <>
        <div className='container'>
          <h1>User Home Page</h1>
          <button
            type="button" className="wrap"
            onClick={() => setshowinfo(!showinfo)}
          >
            DC
          </button>
          {showinfo && <div className="content">
            <div className='details'>
              <div className='user-details'>
                <h2>Display Name</h2>
                <h3>emailid</h3>
                <h5>Account age</h5>
              </div>

              <div>

                <h2>Security</h2>
                <h5> last update : <span className='update-count'>Today</span></h5>

              </div>

              <div>
                <p > Reset Password</p>
                <Link to='/login'>
                  <p className='logout'> Logout </p>
                </Link>
              </div>
            </div>


          </div>}
        </div>

      </>
    )
  }
}

export default User