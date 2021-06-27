const Questions = require('../models/Questions')

module.exports = {

    exists(param, paramName) {
        if (!param) {
            throw {
                status: 400,
                errorMessage: `Param ${paramName} does not exists`
            }
        }
    },

    isValidExam(title, questions) {
        try {
            this.exists(title, 'title')
            this.exists(questions, 'questions')
        } catch (error) {
            console.error(error)
        }
    },

    isValidQuestion(question) {
        try {
            this.exists(question, 'question')
        } catch (error) {
            console.error(error)
        }
    },

    isValidOption(options, descriptions) {
        this.isSameLength(options, descriptions)
        try {
            for (let i = 0; i < options.length; i++) {
                this.exists(options[i], 'option')
                this.exists(descriptions[i], 'description')
            }
        } catch (error) {
            console.error(error)
        }
    },

    isSameLength(options, descriptions) {
        try {
            if (options.length !== descriptions.length) {
                throw {
                    status: 400,
                    errorMessage: `Params options and descriptions does not match sizes`
                }
            }
        } catch (error) {
            console.error(error)
        }
    },

    areValidIds(questionId, optionId) {
        try {
            this.exists(questionId, 'questionId')
            this.exists(optionId, 'optionId')
            if (!(Number.isInteger(questionId) && Number.isInteger(optionId))) {
                throw {
                    status: 400,
                    errorMessage: `One of the ids is not an Integer`
                }
            }
        } catch (error) {
            console.error(error)
        }
    },

    areValidResults(question, alternative) {
        try {
            if (!(question && alternative)) {
                throw {
                    status: 400,
                    errorMessage: `One of the ids does not exists`
                }
            }
        } catch (error) {
            console.error(error)
        }
    },
    async questionExists(questionsArray) {
        let questionResult
        for (const question of questionsArray) {
            questionResult = await Questions.findByPk(question)
            if (!questionResult) {
                throw {
                    status: 400,
                    errorMessage: `Question with id ${question} does not exists`
                }
            }
        }
    },
}