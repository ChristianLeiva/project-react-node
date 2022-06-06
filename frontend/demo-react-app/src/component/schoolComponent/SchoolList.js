import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllSchoolsFromDB } from '../../services/schoolServices'
import { TableRowSchool } from './TableRowSchool'

export const SchoolList = () => {
  const [school, setSchool] = useState([])

  const loadSchools = () => {
    getAllSchoolsFromDB().then((res) => setSchool(res))
  }

  useEffect(() => {
    loadSchools()
  }, [])

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nickname</th>
            <th>Adress</th>
            <th>Locatation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {school.length === 0 ? (
            <tr>
              <td className="colspan" colSpan={6}>
                Empty database
              </td>
            </tr>
          ) : (
            school.map((el) => (
              <TableRowSchool key={el.id_school} dataSchool={el} />
            ))
          )}
        </tbody>
      </Table>
    </>
  )
}
