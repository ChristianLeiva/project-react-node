const express = require('express')
const router = express.Router()
const schoolController = require('../controllers/school.controller')
//get all school
router.get('/', schoolController.getAllSchool)
//find school
router.get('/find', schoolController.getSchool)
// create school
router.post('/create', schoolController.createSchool)
//update school
router.put('/update/:id', schoolController.updateSchool)
//delete school
router.delete('/delete/:id', schoolController.deleteSchool)

module.exports = router
