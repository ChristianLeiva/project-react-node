const getAllUsersFromDB = () => {
  return fetch('http://localhost:4000/users').then((res) => res.json())
}

const deleteUserInDB = (id) => {
  return fetch('http://localhost:4000/users/delete/' + id, {
    method: 'DELETE',
  }).then((res) => res.json())
}

const updateUserInDB = (id, data) => {
  return fetch('http://localhost:4000/users/update/' + id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

const createUserInDB = (data) => {
  return fetch('http://localhost:4000/users/create', {
    method: 'POST',
    headers: {
      Accept: 'aplication/json',
      'Content-type': 'aplication/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export { deleteUserInDB, getAllUsersFromDB, updateUserInDB, createUserInDB }
