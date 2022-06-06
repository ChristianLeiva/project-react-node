const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const School = sequelize.define(
  'School',
  {
    id_school: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    nodelName: 'School',
  }
)
console.log(School === sequelize.models.School) // true
module.exports = School
