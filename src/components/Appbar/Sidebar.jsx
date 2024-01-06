import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar p-2 d-none d-sm-none d-md-block d-lg-block">
                  <div className="logo p-3">
                    <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" width={180} />
                  </div>
                     
                        <ul>
                            <li><a href=""><i class="bi bi-house text-main mx-2"></i>{userId.firstday?.length >= 0 ? userId.firstday[0] : 'N/A'}</a></li>
                            <li><a href=""><i class="bi bi-award-fill text-main mx-2"></i>Webinars</a></li>
                            <li><a href=""><i class="bi bi-clock text-main mx-2"></i>Start Learning</a></li>
                            <li><a href=""><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href=""><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href=""><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href=""><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>
                            <h3 className="fs-5 text-secondary fw-light mx-2 mt-3">Settings</h3>
                            <li><a href=""><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href=""><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href=""><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href=""><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>

                        </ul>
                       
                </div>
  )
}

export default Sidebar
