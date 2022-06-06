import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export const ModalUser = ({
  isVisibleModal,
  closeModalUpCr,
  dataUser,
  updateUser,
  createUser,
}) => {
  const [username, setUsername] = useState(dataUser ? dataUser.username : '')
  const [email, setEmail] = useState(dataUser ? dataUser.email : '')
  const [password, setPassword] = useState(dataUser ? dataUser.password : '')
  const [level, setLevel] = useState(dataUser ? dataUser.level : '')

  const handleOnClick = () => {
    const data = {
      id_user: dataUser.id_user,
      username,
      email,
      password,
      level: parseInt(level),
    }

    updateUser(dataUser.id_user, data)

    closeModalUpCr()
  }

  const handleOnClickCreate = () => {
    const data = {
      username,
      password,
      email,
      level,
    }
    createUser(data)
    closeModalUpCr()
  }
  let isUpdate = false
  return (
    <div>
      <Modal show={isVisibleModal} animation={true}>
        <Modal.Header>
          <Modal.Title>
            {dataUser ? ((isUpdate = true), 'Update User') : 'Create User '}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Level</Form.Label>
              <Form.Select
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value)
                }}
              >
                <option>Open this select menu</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3"></Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                if (isUpdate) {
                  handleOnClick(dataUser.id_user)
                } else {
                  handleOnClickCreate()
                }
              }}
            >
              Acept
            </Button>
            {''}
            <Button variant="secondary" onClick={closeModalUpCr}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
