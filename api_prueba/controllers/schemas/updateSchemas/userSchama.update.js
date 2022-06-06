const Joi = require('joi')

const userUpdate = Joi.object({
  username: Joi.string().alphanum().min(3).max(20),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),

  level: Joi.number().min(1).max(2),
})

module.exports = userUpdate
