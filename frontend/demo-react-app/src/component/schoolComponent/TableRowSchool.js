import { Button } from 'react-bootstrap'
import React from 'react'

export const TableRowSchool = ({ dataSchool }) => {
  const { id_school, name, nickname, adress, location } = dataSchool
  return (
    <>
      <tr>
        <td>{id_school}</td>
        <td>{name}</td>
        <td>{nickname}</td>
        <td>{adress}</td>
        <td>{location}</td>
        <td>
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>
        </td>
      </tr>
    </>
  )
}
