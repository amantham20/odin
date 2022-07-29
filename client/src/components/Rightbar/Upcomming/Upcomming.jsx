import React from 'react'

import './upcomming.css'

const Upcomming = () => {
  return (
    <div>
        <h3 className='Upcomming_title'>Upcomming</h3>
        <div className='upcomming_content'>
            <div className='upcomming_item'>
                <h4>Project 07</h4>
                <h6>CSE 422</h6>
                <h6>Today</h6>
            </div>
            <div className='upcomming_item'>
                <h4>Project 08</h4>
                <h6>CSE 335</h6>
                <h6>Tommorow</h6>
            </div>
            <div className='upcomming_item'>
                <h4>Quiz 05</h4>
                <h6>CSE 422</h6>
                <h6>Dec 05, 2023</h6>
            </div>
        </div>

    </div>
  )
}

export default Upcomming