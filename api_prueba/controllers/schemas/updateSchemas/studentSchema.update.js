const Joi = require('joi')

const studentUpdate = Joi.object({
  name: Joi.string().min(3).max(20),
  lastname: Joi.string().min(3).max(20),
  nota1: Joi.number().min(1).max(10),
  nota2: Joi.number().min(1).max(10),
  school_id: Joi.number(),
  classroom_id: Joi.number().min(1).max(3),
})

module.exports = studentUpdate
