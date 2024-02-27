import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Chatpage from './Pages/Chatpage'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/chats' Component={Chatpage} />
      </Routes>
    </div>
  )
}

export default App

