import React from 'react'

// import { me } from '/logo192.png'
import ProfilePhoto from '../../logo.svg';

import {IoSettingsSharp} from 'react-icons/io5'

import './Profile.css'


const Profile = () => {
  return (
    <div className='profile_bar'>
         <img src={ProfilePhoto} className='ProfilePicture' />
         <div className='ProfileInfo'>
            <h4 className='ProfileName'>thammina</h4>
            <h6 className='ProfileGradeLevel'> Jr. </h6>

         </div>
         <IoSettingsSharp className='ProfilesettingsIcons'/>    
    </div>
  )
}

export default Profile