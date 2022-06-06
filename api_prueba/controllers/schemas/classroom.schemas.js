const Joi = require('joi')

const classroomSchema = Joi.object({
  classroom: Joi.string().min(3).max(10).required(),
  school_id: Joi.number().required(),
})

module.exports = classroomSchema
