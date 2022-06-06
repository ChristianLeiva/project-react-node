const Joi = require('joi')

const classroomUpdate = Joi.object({
  classroom: Joi.string().min(3).max(10),
  school_id: Joi.number(),
})

module.exports = classroomUpdate
