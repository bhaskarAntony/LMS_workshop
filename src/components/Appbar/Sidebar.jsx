import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar p-2">
                  <div className="logo p-3">
                    <img src="https://be-practical.com/images/Be-logo.png" alt="logo" width={180} />
                  </div>
                     
                        <ul>
                            <li><a href="/"><i class="bi bi-house text-main mx-2"></i>Home</a></li>
                            <li><a href="/"><i class="bi bi-award-fill text-main mx-2"></i>Webinars</a></li>
                            <li><a href="/"><i class="bi bi-clock text-main mx-2"></i>Start Learning</a></li>
                            <li><a href="/"><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href="/"><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href="/"><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href="/"><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>
                           

                        </ul>
                       
                       
                </div>
  )
}

export default Sidebar
