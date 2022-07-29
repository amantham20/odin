import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import RightBar from './components/Rightbar/RightBar';

import { useParams } from 'react-router';

import './App.css'

const Course = () => {
    const params = useParams();

    return (
    <div className="App">
        <Sidebar />
        <div>
            <h1>{params.id.toUpperCase()}</h1>
        </div>
        <RightBar />
    </div>
  )
}

export default Course