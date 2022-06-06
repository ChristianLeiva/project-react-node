const Joi = require('joi')
const classroomSchema = require('./schemas/classroom.schemas')
const classroomUpdate = require('./schemas/updateSchemas/classroomSchema.update')
const Classroom = require('../database/models/classroom.model')
const School = require('../database/models/school.model')
const associations = require('../database/associations/associations')

//get all classroooms
async function getClassroom(req, res) {
  try {
    let result = await Classroom.findAll({
      include: {
        model: School,
        as: 'school',
        attributes: ['nickname'],
      },
      attributes: ['id_classroom', 'classroom'],
    })
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
//create
async function createClassroom(req, res) {
  const data = await req.body
  if (data) {
    try {
      Joi.assert(data, classroomSchema)
      await Classroom.create({
        classroom: data.classroom,
        school_id: data.school_id,
      })
      res.json({
        code: 'ok',
        message: 'Classroom created succefuly',
      })
    } catch (error) {
      res.status(400).json({
        code: 'Bad request',
        messaga: 'Classroom dont be created',
        error: error,
      })
    }
  }
}
//update
async function updateClassroom(req, res) {
  const classroom = await Classroom.findOne({
    where: { id_classroom: req.params.id },
  })
  const data = await req.body
  try {
    if (classroom) {
      Joi.assert(data, classroomUpdate)
      await Classroom.update(
        {
          classroom: data.classroom,
          school_id: data.school_id,
        },
        {
          where: { id_classroom: req.params.id },
        }
      )
      res.json({
        code: 'ok',
        message: 'Classroom update succefuly',
      })
    } else {
      res.status(400).json({
        code: 'Bad request',
        messaga: 'Classroom does not exist',
      })
    }
  } catch (error) {
    res.status(400).json({
      code: 'Bad request',
      messaga: 'Classroom dont be updated',
      error: error,
    })
  }
}
//delete
async function deleteClassroom(req, res) {
  const classroom = await Classroom.findOne({
    where: { id_classroom: req.params.id },
  })
  try {
    if (classroom) {
      await Classroom.destroy({
        where: {
          id_classroom: classroom.id_classroom,
        },
      })
      res.json({
        code: 'ok',
        message: 'Classroom deleted succefuly',
      })
    } else {
      res.status(400).json({
        code: 'Bad request',
        messaga: 'Classroom does not exist',
      })
    }
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  getClassroom,
  createClassroom,
  updateClassroom,
  deleteClassroom,
}
