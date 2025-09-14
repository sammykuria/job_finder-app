import React from 'react'

function Home() {
  return (
    <div>

        <div className='bigshak'>
            <div className='bigsharkcontent'>
                   <h2>Jobs for Every Talent</h2>
                   <p>Every Abilityy</p>
                   <h6>Search your career oportunity through 12,800 jobs</h6>

            </div>
                  
                  <div class="input-wrapper">
                <input type="text" placeholder="Type here..." name="text" class="input"/>
                </div>
                    
        </div>

        <div className='jobhomeicons'>
          <ul className='jobhomecontainer'>
            <li className='listjobs'>
              <i class="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i class="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i class="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i class="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i class="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>
          </ul>
        </div>

        <div>
          <div className='morejob'>
            <h2>Discover Recent Job Openings </h2>
            <button>See More</button>
          </div>
        </div>

       
      


    </div>
  )
}

export default Home
