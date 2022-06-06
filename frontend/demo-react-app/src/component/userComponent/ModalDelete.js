import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ModalDelete = ({
  isVisible,
  closeModal,
  dataUser,
  deleteUser,
}) => {
  return (
    <>
      <Modal show={isVisible} animation={true}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete {dataUser.username}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault()
              deleteUser(dataUser)
              closeModal()
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
