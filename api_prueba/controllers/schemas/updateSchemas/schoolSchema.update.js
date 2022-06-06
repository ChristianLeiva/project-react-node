const Joi = require('joi')

const schoolUpdate = Joi.object({
  name: Joi.string().min(5).max(20),
  nickname: Joi.string().min(3).max(10),
  adress: Joi.string().min(3).max(20),
  location: Joi.string().min(5),
})

module.exports = schoolUpdate
