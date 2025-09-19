import React, { useState, useEffect } from 'react'

function Home() {

  const [jobs,setJobs] = useState([])


  useEffect(() => {
    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data); // Arbeitnow returns { data: [jobs...] }
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []); // ✅ Empty dependency array = run only once

  return (
    <div>

        <div className='bigshak'>
            <div className='bigsharkcontent'>
                   <h2>Jobs for Every Talent</h2>
                   <p>Every Abilityy</p>
                   <h6>Search your career oportunity through 12,800 jobs</h6>

            </div>
                  
                  <div className="input-wrapper">
                <input type="text" placeholder="Type here..." name="text" clasName="input"/>
                </div>
                    
        </div>

        <div className='jobhomeicons'>
          <ul className='jobhomecontainer'>
            <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>

             <li className='listjobs'>
              <i className="fa-solid fa-user-doctor"></i>
              <p>Lifestyle</p>
            </li>
          </ul>
        </div>

        <div>

        


          <div className='ogboy'>
            <div className='bwoyyh'>
                <h2>Popular Job Categories</h2>
            <p>Find the Job that's perfect for you.About 200+ new jobs everyday</p>
            </div>
          
            <div className='cardcontainer'>
              <div className='cardy'>
                <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>Information Technology(IT)</h2>
                  <p>433 jobs available</p>
                </div>
              </div>

                <div className='cardy'>
          <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>UI/UX design</h2>
                  <p>433 jobs available</p>
                </div>
              </div>

                <div className='cardy'>
          <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>HealthCare</h2>
                  <p>433 jobs available</p>
                </div>
              </div>


                <div className='cardy'>
        <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>Finance</h2>
                  <p>433 jobs available</p>
                </div>
              </div>


                <div className='cardy'>
 <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>Business</h2>
                  <p>433 jobs available</p>
                </div>
              </div>


                <div className='cardy'>
       <img className='magnifyimg' src='/magnify.png'alt='wagwan'></img>
                <div className='cardybody'>
                  <h2>Engineering</h2>
                  <p>433 jobs available</p>
                </div>
              </div>

            </div>
          </div>




  <div className='morejob'>
            <h2>Discover Recent Job Openings </h2>
            <div className='morejobbutt'>
              <h3><span>Sorted by: </span>last Update</h3>
              <button>See More</button>
            </div>
          </div>



          <div>
            <h1>Jobs</h1>
            {jobs.length > 0 ? (
              <div className='jobcardcontainer'>
                <div >
                
                {jobs.map((job, index) => (
                  <div className='jobcardgood' key={index}>
                    <p>{job.companyname}</p> – {job.companyName}
                    <p>{job.title}</p>
                    <button>{job.created_at}</button>
                  </div>
                ))}
                 </div>

                  {/* <button className='showsome'>View Details</button> */}

              </div>
            ) : (
              <p>Loading jobs...</p>
            )}
          </div>


        </div>



       
      


    </div>
  )
}

export default Home
