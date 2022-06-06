const getAllStudentsFromDB = () => {
  return fetch('http://localhost:4000/students').then((res) => res.json())
}

export { getAllStudentsFromDB }
