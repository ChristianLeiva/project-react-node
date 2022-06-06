import React from 'react'
import { Link } from 'react-router-dom'
import { ClassroomList } from '../component/classroomComponent/ClassroomList'

export const ClassroomPage = () => {
  return (
    <>
      <h1>ClassRoom List</h1>
      <hr></hr>
      <ClassroomList></ClassroomList>
      <hr></hr>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </>
  )
}
