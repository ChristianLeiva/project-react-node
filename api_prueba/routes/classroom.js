const express = require('express')
const router = express.Router()
const classroomController = require('../controllers/classroom.controller')

module.exports = router
//get all classroom
router.get('/', classroomController.getClassroom)
//create
router.post('/create', classroomController.createClassroom)
//update
router.put('/update/:id', classroomController.updateClassroom)
//delete
router.delete('/delete/:id', classroomController.deleteClassroom)
