import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllStudentsFromDB } from '../../services/studentServices'
import { TableRowStudent } from './TableRowStudent'

export const StudentList = () => {
  const [student, setStudent] = useState([])

  const loadStudent = () => {
    getAllStudentsFromDB().then((res) => setStudent(res))
  }

  useEffect(() => {
    loadStudent()
  }, [])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Classroom</th>
            <th>School</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.length === 0 ? (
            <tr>
              <td className="colspan" colSpan={6}>
                Empty database
              </td>
            </tr>
          ) : (
            student.map((el) => (
              <TableRowStudent key={el.id_student} studentData={el} />
            ))
          )}
        </tbody>
      </Table>
    </>
  )
}
