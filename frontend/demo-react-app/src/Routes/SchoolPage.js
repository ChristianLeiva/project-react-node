import React from 'react'
import { Link } from 'react-router-dom'
import { SchoolList } from '../component/schoolComponent/SchoolList'

export const SchoolPage = () => {
  return (
    <>
      <h1>Schools List</h1>
      <hr></hr>
      <SchoolList></SchoolList>
      <hr></hr>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </>
  )
}
