const validate = require('../utils/validate')
const Questions = require('../models/Questions')
const Alternatives = require('../models/Alternatives')
const Answers = require('../models/Answers')


module.exports = {
    async createQuestions(req, res) {
        try {
            let option, description
            const { question, options, descriptions } = req.body

            const optionsArray = Object.values(options)
            const descriptionsArray = Object.values(descriptions)

            validate.isValidQuestion(question)
            validate.isValidOption(options, descriptions)

            const result = await Questions.create({ question })

            for (let i = 0; i < options.length; i++) {
                option = optionsArray[i]
                description = descriptionsArray[i]
                await Alternatives.create({ questionId: result.id, option, description })
            }
            return res.json(result)
        } catch (error) {
            console.log(error)
        }
    },

    async getQuestions(req, res) {
        try {
            const questions = await Questions.findAll()
            return res.json(questions)
        } catch (error) {
            console.log(error)
        }
    },

    async assignCorrectOption(req, res) {
        const { questionId, optionId } = req.body
        try {
            validate.areValidIds(questionId, optionId)

            const question = await Questions.findByPk(questionId)
            const alternative = await Alternatives.findByPk(optionId)

            validate.areValidResults(question, alternative)

            const answer = await Answers.create({ alternativeId: alternative.id, questionId: question.id })

            return res.json(answer)

        } catch (error) {
            console.log(error)
        }
    }
}