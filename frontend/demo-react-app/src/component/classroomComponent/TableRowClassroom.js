import React from 'react'
import { Button } from 'react-bootstrap'

export const TableRowClassroom = ({ dataClassroom }) => {
  const { id_classroom, classroom, school } = dataClassroom

  return (
    <>
      <tr>
        <td>{id_classroom}</td>
        <td>{classroom}</td>
        <td>{school.nickname}</td>
        <td>
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>
        </td>
      </tr>
    </>
  )
}
