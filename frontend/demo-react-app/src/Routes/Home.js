import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>Welcome to schoolsite</h1>
      <hr></hr>
      <ul>
        <li>
          <Link to={'/user'}>User list</Link>
        </li>
        <li>
          <Link to={'/student'}>Student list</Link>
        </li>
        <li>
          <Link to={'/school'}>School list</Link>
        </li>
        <li>
          <Link to={'/classroom'}>Classroom list</Link>
        </li>
      </ul>
    </>
  )
}
