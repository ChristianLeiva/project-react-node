import React from 'react'
import { Button } from 'react-bootstrap'

export const TableRowStudent = ({ studentData }) => {
  const { id_student, name, lastname, classroom, school } = studentData
  return (
    <>
      <tr>
        <td>{id_student}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{classroom.classroom}</td>
        <td>{school.nickname}</td>
        <td>
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>
        </td>
      </tr>
    </>
  )
}
