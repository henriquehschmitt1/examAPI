const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Exams = require('../models/Exam')
const Questions = require('../models/Questions')
const Alternatives = require('../models/Alternatives')
const Answers = require('../models/Answers')

const connection = new Sequelize(dbConfig)

Exams.init(connection)
Questions.init(connection)
Alternatives.init(connection)
Answers.init(connection)

module.exports = connection
