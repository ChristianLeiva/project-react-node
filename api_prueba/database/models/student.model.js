const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define(
  'Student',
  {
    id_student: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exam_note_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exam_note_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classroom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    nodelName: 'Student',
  }
)

console.log(Student === sequelize.models.Student) // true
module.exports = Student
