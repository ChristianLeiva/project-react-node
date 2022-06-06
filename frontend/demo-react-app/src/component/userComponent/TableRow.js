import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ModalDelete } from '../userComponent/ModalDelete'
import { ModalUser } from './ModalUser'
debugger
export const TableRow = ({ dataUser, deleteUser, updateUser, createUser }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const { id_user, username, email, level } = dataUser
  const chooseLevel = (level) => {
    switch (level) {
      case 1:
        return 'Admin'
      case 2:
        return 'User'
      default:
        return 'porAca'
    }
  }

  // *****modal user*****
  const openModalUpCr = () => setIsVisibleModal(true)
  const closeModalUpCr = () => setIsVisibleModal(false)
  // *****modal user*****

  const openModal = () => setIsVisible(true)
  const closeModal = () => setIsVisible(false)

  return (
    <>
      <tr>
        <td>{id_user}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{chooseLevel(level)}</td>
        <td>
          <Button variant="outline-warning" onClick={openModalUpCr}>
            Edit
          </Button>{' '}
          <Button variant="outline-danger" onClick={openModal}>
            Delete
          </Button>
        </td>
      </tr>
      <ModalDelete
        isVisible={isVisible}
        closeModal={closeModal}
        dataUser={dataUser}
        deleteUser={deleteUser}
      />

      <ModalUser
        isVisibleModal={isVisibleModal}
        closeModalUpCr={closeModalUpCr}
        dataUser={dataUser}
        updateUser={updateUser}
        createUser={createUser}
      />
    </>
  )
}
