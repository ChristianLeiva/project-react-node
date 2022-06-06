const Joi = require('joi')
const schoolSchema = require('./schemas/school.schema')
const schoolUpdate = require('./schemas/updateSchemas/schoolSchema.update')
const School = require('../database/models/school.model')
const Sequelize = require('sequelize')
//get all school
async function getAllSchool(req, res) {
  let result = await School.findAll()
  res.send(result)
}
//get school by name
async function getSchool(req, res) {
  const name = await req.query.name
  console.log(name)
  try {
    const result = await School.findAll({
      where: {
        nickname: {
          [Sequelize.Op.like]: `%${name}%`,
        },
      },
    })
    res.json(result)
  } catch (error) {
    res.send(error)
  }
}
//create school
async function createSchool(req, res) {
  const data = req.body
  try {
    if (data) {
      Joi.assert(data, schoolSchema)
      await School.create({
        name: data.name,
        nickname: data.nickname,
        adress: data.adress,
        location: data.location,
      })
      res.json({
        code: 'ok',
        message: 'School created succefuly',
      })
    } else {
      res.status(400).json({
        code: 'Bad request',
        message: 'Check all data send',
      })
    }
  } catch (error) {
    res.send(error)
  }
}
//update school
async function updateSchool(req, res) {
  const school = await School.findOne({ where: { id_school: req.params.id } })
  const data = req.body
  if (school) {
    try {
      Joi.assert(data, schoolUpdate)
      await School.update(
        {
          name: data.name,
          nickname: data.nickname,
          adress: data.adress,
          location: data.location,
        },
        {
          where: { id_school: school.id_school },
        }
      )
      res.json({
        code: 'ok',
        message: 'School updated succefuly',
      })
    } catch (error) {
      res.send(error)
    }
  } else {
    res.status(400).json({
      code: 'error',
      message: 'School does not exist',
    })
  }
}
//deleta school
async function deleteSchool(req, res) {
  const school = await School.findOne({ where: { id_school: req.params.id } })
  if (school) {
    try {
      await School.destroy({
        where: { id_school: school.id_school },
      })
    } catch (error) {
      res.send(error)
    }
    res.json({
      code: 'ok',
      message: 'School deleted succefuly',
    })
  } else {
    res.status(400).json({
      code: 'ok',
      message: 'School does not exits',
    })
  }
}

module.exports = {
  getAllSchool,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
}
