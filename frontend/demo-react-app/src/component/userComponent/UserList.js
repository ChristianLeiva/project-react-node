import React, { useEffect, useReducer } from 'react'
import { Table } from 'react-bootstrap'
import { TableRow } from './TableRow'
import {
  createUserInDB,
  deleteUserInDB,
  getAllUsersFromDB,
  updateUserInDB,
} from '../../services/userServices'
import { userInitialState, userReducer } from '../../reducer/userReducer'
import { TYPES } from '../../actions/userActions'

export const UserList = ({ deleteUser, updateUser, createUser }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState)

  const { db } = state

  const loadUser = () => {
    getAllUsersFromDB().then((res) =>
      dispatch({ type: TYPES.READ_ALL_USER, payload: res })
    )
  }

  deleteUser = (dataUser) => {
    deleteUserInDB(dataUser.id_user).then((res) =>
      dispatch({ type: TYPES.DELETE_USER, payload: dataUser.id_user })
    )
  }

  updateUser = (id, data) => {
    const dataSinID = { ...data } //hacer una copia del objeto data si no lo hago con los 3 puntos lo mismo se elimina del el otro lado..
    dataSinID.id_user = undefined
    updateUserInDB(id, dataSinID).then((res) => {
      dispatch({ type: TYPES.UPDATE_USER, payload: data })
    })
  }
  createUser = (data) => {
    debugger
    console.log(data)
  }

  useEffect(() => {
    loadUser()
  }, [])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr>
              <td className="colspan" colSpan={5}>
                Empty database
              </td>
            </tr>
          ) : (
            db.map((user) => (
              <TableRow
                key={user.id_user}
                dataUser={user}
                deleteUser={deleteUser}
                updateUser={updateUser}
                createUser={createUser}
              />
            ))
          )}
        </tbody>
      </Table>
    </>
  )
}
