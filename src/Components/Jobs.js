import React from 'react'
import { Link } from 'react-router-dom'

function Jobs() {
  return (
    <div>


      <div className='jobheader'>
        <h2>Popular Jobs Available</h2>
        <p>Browse by :Latest update</p>
        <div className='searchinput'>
<div className="input-group">
    <label className="label">Email address</label>
    <input autocomplete="off" name="Email" id="Email" className="input" type="email"/>
    <div></div></div>        </div>
      </div>


      <div className='jobsearchbuttons'>
        <ul>
            <li>
                <button>
                   <Link>Finance</Link> 
                </button>
            </li>

              <li>
                <button>
                   <Link>HealthCare</Link> 
                </button>
            </li>

              <li>
                <button>
                   <Link>Education</Link> 
                </button>
            </li>

              <li>
                <button>
                   <Link>Marketing</Link> 
                </button>
            </li>

              <li>
                <button>
                   <Link>Design</Link> 
                </button>
            </li>
        </ul>
      </div>


    </div>
  )
}

export default Jobs
