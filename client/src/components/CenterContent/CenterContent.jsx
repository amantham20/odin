import React from 'react'

import './centerContent.css'

import { Link } from 'react-router-dom'

const CenterContent = () => {
  return (
    <div className='mainContent'>
        <h1 className='mainContentHeading'>Good Morning</h1>

        {/* list of courses horizontally */}
        <div className='courseList'>
            <div className='courseListItem'>
                <div>
                  <img src='https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg' alt='course' />
                </div>
                <h2>Course 1</h2>
                <h3>Course Name</h3>
            </div>
            <div className='courseListItem'>
                <div>
                  <img src='https://engineering.tufts.edu/sites/g/files/lrezom421/files/styles/embedded_large/public/Programs_Dept-ComputerScience_lrg_0.jpg?itok=nKHOb7F2' alt='course' />
                </div>
                <h2>Course 2</h2>
                <h3>Course Name</h3>
            </div>
            <div className='courseListItem'>
                <div>
                  <img src='https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg' alt='course' />
                </div>
                <h2>Course 3</h2>
                <h3>Course Name</h3>
            </div>
            <div className='courseListItem'>
                <div>
                  <img src='https://engineering.tufts.edu/sites/g/files/lrezom421/files/styles/embedded_large/public/Programs_Dept-ComputerScience_lrg_0.jpg?itok=nKHOb7F2' alt='course' />
                </div>
                <h2>Course 4</h2>
                <h3>Course Name</h3>
            </div>
            <div className='courseListItem'>
                <div>
                  <img src='https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg' alt='course' />
                </div>
                <h2>Course 5</h2>
                <h3>Course Name</h3>
            </div>

            <div className='courseListItem'>
                <div>
                  <img src='https://engineering.tufts.edu/sites/g/files/lrezom421/files/styles/embedded_large/public/Programs_Dept-ComputerScience_lrg_0.jpg?itok=nKHOb7F2' alt='course' />
                </div>
                <h2>Course 6</h2>
                <h3>Course Name</h3>
            </div>
        </div>
                
    </div>
  )
}

export default CenterContent