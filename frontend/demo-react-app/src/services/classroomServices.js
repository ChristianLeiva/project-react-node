const getAllClassroomsFromDB = () => {
  return fetch('http://localhost:4000/classrooms').then((res) => res.json())
}

export { getAllClassroomsFromDB }
