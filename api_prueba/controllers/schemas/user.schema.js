const Joi = require('joi')

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  level: Joi.number().min(1).max(2).required(),
})

module.exports = userSchema
