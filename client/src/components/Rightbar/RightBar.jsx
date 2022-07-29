import React from 'react'

import './rightbar.css'

import Upcomming from './Upcomming/Upcomming'

const RightBar = () => {
  return (
    <div className='rightbar'>
        <Upcomming />

        <div className='calendar'>
            {/* calendar */}
            <h3>Calendar</h3>
            <div className='calendar_content'> box </div>
            <h3>More Content</h3>

            
        </div>
    </div>
  )
}

export default RightBar