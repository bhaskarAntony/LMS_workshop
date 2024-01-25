import React from 'react'
import './style.css'
import Bootcamps from '../../components/Bootcamps/Bootcamps'
import Categories from '../../components/Categories/Categories'
import DigitalLibrary from '../../components/Digital library/DititalLibrary'
import Episodes from '../../components/recordings/Episodes'
import Footer from '../../components/Footer/Footer'
import Bootcamp from '../BootcampView/Bootcamp'

function Dashboard() {
  return (
    <section className='dashboard bg-light'>
      {/* <Bootcamps/>
      <Categories/>
      <DigitalLibrary/>
      <Episodes/>
      <Footer/> */}
      <Bootcamp/>
    </section>
  )
}

export default Dashboard
