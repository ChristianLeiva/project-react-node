import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ClassroomPage } from './Routes/ClassroomPage'
import { Home } from './Routes/Home'
import { SchoolPage } from './Routes/SchoolPage'
import { StudentPage } from './Routes/StudentPage'
import { UserPage } from './Routes/UserPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/user" element={<UserPage />} exact />
          <Route path="/student" element={<StudentPage />} exact />
          <Route path="/school" element={<SchoolPage />} exact />
          <Route path="/classroom" element={<ClassroomPage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
