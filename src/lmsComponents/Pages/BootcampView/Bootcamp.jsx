import React from 'react'
import BasicTabs from '../../../components/Eventtab/BasicTabs'
import ViewInfocard from '../../components/ViewCard/ViewInfocard'
import Related from '../../components/Related course/Related'

function Bootcamp() {
  return (
    <section className='bootcamp-view p-2 container-fluid'>
        <div className="view-top p-5 bg-primary text-white rounded-3">
                <p className="fs-5">WEB DEVELPMENT</p>
                <h1 className="fs-2">The Complete JavaScript From beginning <br /> to Experts for advance</h1>
                <span className="fs-5 d-block">1200 Enrolled</span>
                <span className="fs-6">created by Ganesh . Last updated 20/01/2024</span>
        </div>
        <div className="view-body">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8">
                    <div className="view-left">
                    <BasicTabs/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="view-right p-2">
                        <ViewInfocard/>
                        <Related/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bootcamp
