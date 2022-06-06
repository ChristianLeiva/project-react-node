import React from 'react'
import { Link } from 'react-router-dom'
import { StudentList } from '../component/studentComponent/StudentList'

export const StudentPage = () => {
  return (
    <>
      <h1>Student List</h1>
      <hr></hr>
      <StudentList></StudentList>
      <hr></hr>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </>
  )
}
