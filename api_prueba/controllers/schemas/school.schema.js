const Joi = require('joi')

const schoolSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  nickname: Joi.string().min(3).max(10).required(),
  adress: Joi.string().min(3).max(20).required(),
  location: Joi.string().min(5).required(),
})

module.exports = schoolSchema
