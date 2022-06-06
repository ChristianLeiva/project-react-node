const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Classroom = sequelize.define(
  'Classroom',
  {
    id_classroom: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    classroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'Classroom',
  }
)
console.log(Classroom === sequelize.models.Classroom) // true
module.exports = Classroom
