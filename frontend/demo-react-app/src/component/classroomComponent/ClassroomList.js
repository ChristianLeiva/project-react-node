import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllClassroomsFromDB } from '../../services/classroomServices'
import { TableRowClassroom } from './TableRowClassroom'

export const ClassroomList = () => {
  const [classroom, setClassroom] = useState([])

  const loadClassroom = () => {
    getAllClassroomsFromDB().then((res) => setClassroom(res))
  }

  useEffect(() => {
    loadClassroom()
  }, [])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Classroom</th>
            <th>School</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classroom.length === 0 ? (
            <tr>
              <td className="colspan" colSpan={4}>
                Empty database
              </td>
            </tr>
          ) : (
            classroom.map((el) => (
              <TableRowClassroom key={el.id_classroom} dataClassroom={el} />
            ))
          )}
        </tbody>
      </Table>
    </>
  )
}
