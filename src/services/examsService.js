const validate = require('../utils/validate')
const Exams = require('../models/Exam')
const Questions = require('../models/Questions')
const Alternatives = require('../models/Alternatives')

module.exports = {
    async createExam(req, res) {
        const { title, questions } = req.body
        try {
            const questionsArray = Object.values(questions)
            validate.isValidExam(title, questionsArray)

            await validate.questionExists(questionsArray)

            const exam = await Exams.create({ title, questions: questionsArray })
            return res.json(exam)

        } catch (error) {
            console.log(error)
        }
    },

    async getExams(req, res) {
        try {
            const exams = await Exams.findAll()
            return res.json(exams)
        } catch (error) {
            console.log(error)
        }
    },

    async getExamById(req, res) {
        const { id } = req.query
        try {
            const exam = await Exams.findByPk(id)
            const questions = await Questions.findAll({
                where: {
                    id: exam.questions
                }
            })
            return res.json({ exam, questions })
        } catch (error) {
            console.log(error)
        }
    }
}