import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavbarHeader } from '../component/NavbarHeader'
import { ModalUser } from '../component/userComponent/ModalUser'
import { UserList } from '../component/userComponent/UserList'

export const UserPage = ({ createUser }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const opnenModalUpCr = () => setIsVisibleModal(true)
  const closeModalUpCr = () => setIsVisibleModal(false)

  const handleClick = () => {
    opnenModalUpCr()
  }
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <br></br>
      <Row>
        <Col sm={8}>
          <h1>User List</h1>
        </Col>
        <Col sm={4}>
          <Button
            onClick={(e) => {
              e.preventDefault()
              handleClick()
            }}
          >
            Add User
          </Button>
        </Col>
      </Row>
      <hr></hr>
      <UserList createUser={createUser}></UserList>
      <hr></hr>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
      <ModalUser
        isVisibleModal={isVisibleModal}
        closeModalUpCr={closeModalUpCr}
        createUser={createUser}
      />
    </>
  )
}
