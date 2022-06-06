const Joi = require('joi')
const studentSchema = require('./schemas/student.schema')
const studentUpdate = require('./schemas/updateSchemas/studentSchema.update')
const Student = require('../database/models/student.model')
const Sequelize = require('sequelize')
const School = require('../database/models/school.model')
const associations = require('../database/associations/associations')
const Classroom = require('../database/models/classroom.model')
//get all student
async function getStudent(req, res) {
  try {
    let result = await Student.findAll({
      include: [
        {
          model: Classroom,
          as: 'classroom',
          attributes: ['classroom'],
        },
        {
          model: School,
          as: 'school',
          attributes: ['nickname'],
        },
      ],
      attributes: [
        'id_student',
        'name',
        'lastname',
        'exam_note_1',
        'exam_note_2',
      ],
    })
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
//find students
async function findStundet(req, res) {
  const name = await req.query.name
  console.log(name)
  try {
    const result = await Student.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`,
        },
      },
      include: [
        {
          model: Classroom,
          as: 'classroom',
          attributes: ['classroom'],
        },
        {
          model: School,
          as: 'school',
          attributes: ['nickname'],
        },
      ],
      attributes: ['name', 'lastname', 'exam_note_1', 'exam_note_2'],
    })
    res.json(result)
  } catch (error) {
    res.send(error)
  }
}
//new student
async function createStudent(req, res) {
  const data = await req.body
  if (data) {
    try {
      Joi.assert(data, studentSchema)
      await Student.create({
        name: data.name,
        lastname: data.lastname,
        exam_note_1: data.nota1,
        exam_note_2: data.nota2,
        school_id: data.school_id,
        classroom_id: data.classroom_id,
      })
      res.json({
        code: 'ok',
        message: 'Stundent created succefuly',
      })
    } catch (error) {
      res.send(error)
    }
  }
}
//upate student
async function updateStudent(req, res) {
  const student = await Student.findOne({
    where: { id_student: req.params.id },
  })
  let data = req.body
  if (student) {
    try {
      Joi.assert(data, studentUpdate)
      await Student.update(
        {
          name: data.name,
          lastname: data.lastname,
          exam_note_1: data.nota1,
          exam_note_2: data.nota2,
          school_id: data.school_id,
          classroom_id: data.classroom_id,
        },
        {
          where: { id_student: student.id_student },
        }
      )
      res.json({
        code: 'ok',
        message: 'Student updated succefuly',
      })
    } catch (error) {
      res.send(error)
    }
  } else {
    res.status(400).json({
      code: 'error',
      message: 'Student ID does not exist',
    })
  }
}
//delete student
async function deleteStudent(req, res) {
  const student = await Student.findOne({
    where: { id_student: req.params.id },
  })
  if (student) {
    try {
      await Student.destroy({
        where: { id_student: req.params.id },
      })
      res.json({
        code: 'ok',
        message: 'Student deleted succefuly',
      })
    } catch (error) {
      res.send(error)
    }
  } else {
    res.status(400).json({
      code: 'error',
      message: 'Student ID does not exits',
    })
  }
}
module.exports = {
  getStudent,
  findStundet,
  createStudent,
  updateStudent,
  deleteStudent,
}
