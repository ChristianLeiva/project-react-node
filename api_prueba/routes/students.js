const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')

//get all students
router.get('/', studentController.getStudent)
//find any student
router.get('/find', studentController.findStundet)
//create student
router.post('/create', studentController.createStudent)
//update student
router.put('/update/:id', studentController.updateStudent)
//delete student
router.delete('/delete/:id', studentController.deleteStudent)
module.exports = router
