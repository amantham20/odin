import React from 'react'
import Profile from './Profile/Profile'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar_content'>
        <h1>Odin</h1>
        <Profile />
    </div>
  )
}

export default Sidebar