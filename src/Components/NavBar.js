import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <h2>This is Navbar</h2>

      <div className='trexcontainer'> 
        <div className='header'>
            <h2>JobHub</h2>
        </div>


        <div className='pages'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Find Jobs</Link>
                </li>
                <li>
                    <Link>Career Advise</Link>
                </li>
            </ul>
        </div>

        <div className='infinitylink'>
          <Link>
          <p>Login</p>
          </Link>

          <Link>
          <button>Sign in</button>
          </Link>
         
           
        </div>
      </div>
    </div>
  )
}

export default NavBar
