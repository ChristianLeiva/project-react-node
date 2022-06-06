const getAllSchoolsFromDB = () => {
  return fetch('http://localhost:4000/schools').then((res) => res.json())
}

export { getAllSchoolsFromDB }
