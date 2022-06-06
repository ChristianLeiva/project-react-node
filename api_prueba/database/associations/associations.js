const Student = require('../models/student.model')
const School = require('../models/school.model')
const Classroom = require('../models/classroom.model')
const sequelize = require('sequelize')

Student.belongsTo(School, { foreignKey: 'school_id', as: 'school' })
School.hasMany(Student, { foreignKey: 'school_id' })

Student.belongsTo(Classroom, { foreignKey: 'classroom_id', as: 'classroom' })
Classroom.hasMany(Student, { foreignKey: 'classroom_id' })

Classroom.belongsTo(School, { foreignKey: 'school_id', as: 'school' })
School.hasMany(Classroom, { foreignKey: 'school_id' })
