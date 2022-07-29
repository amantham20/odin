import React from 'react'

import Sidebar from './components/Sidebar/Sidebar';
import RightBar from './components/Rightbar/RightBar';
import CenterContent from './components/CenterContent/CenterContent';

import './App.css'

const Main = () => {
  return (
    <div className="App">
        <Sidebar />
        <CenterContent />
        <RightBar />
    </div>
  )
}

export default Main