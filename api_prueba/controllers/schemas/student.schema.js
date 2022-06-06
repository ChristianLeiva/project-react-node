const Joi = require('joi')

const studentSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().alphanum().min(3).max(20).required(),
  nota1: Joi.number().min(1).max(10),
  nota2: Joi.number().min(1).max(10),
  school_id: Joi.number().required(),
  classroom_id: Joi.number().required(),
})

module.exports = studentSchema
