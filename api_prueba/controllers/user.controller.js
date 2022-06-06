const Joi = require('joi')
const userSchema = require('./schemas/user.schema')
const userSchemaUpdate = require('./schemas/updateSchemas/userSchama.update')
const User = require('../database/models/user.model')
const Sequelize = require('sequelize')

// get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.findAll({
      attributes: ['id_user', 'username', 'email', 'level', 'password'],
    })
    result.length === 0 ? res.send('Database empty') : res.send(result)
  } catch (error) {
    res.send(error)
  }
}
//get an user from db
const getUSer = async (req, res) => {
  let name = await req.query.username
  try {
    let result = await User.findAll({
      where: {
        username: {
          [Sequelize.Op.like]: `%${name}%`,
        },
      },

      attributes: ['id_user', 'username', 'email', 'level'],
    })
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

//create user
const createUser = async (req, res) => {
  const data = await req.body
  try {
    Joi.assert(data, userSchema)
    await User.create({
      username: data.username,
      password: data.password,
      email: data.email,
      level: data.level,
    })
    res.send('User created succefuly')
  } catch (error) {
    res.status(400).json(error)
  }
}

//update user
const updateUser = async (req, res) => {
  const user = await User.findOne({ where: { id_user: req.params.id } })
  let data = req.body
  try {
    if (user) {
      Joi.assert(data, userSchemaUpdate)
      await User.update(
        {
          username: data.username,
          password: data.password,
          email: data.email,
          level: data.level,
        },
        {
          where: { id_user: req.params.id },
        }
      )
      res.json({
        code: 'ok',
        message: 'User update succefuly',
      })
    } else {
      res.status(400).json({
        code: 'error',
        message: 'User does not exits',
      })
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

//delete user
const deleteUser = async (req, res) => {
  const user = await User.findOne({ where: { id_user: req.params.id } })
  try {
    if (user) {
      await User.destroy({
        where: {
          id_user: user.id_user,
        },
      })
      res.json({
        code: 'ok',
        message: 'User deleted succefuly',
      })
    } else {
      res.send('User ID does not exist')
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllUsers,
  getUSer,
  createUser,
  updateUser,
  deleteUser,
}
