const express = require('express')
const ExamsService = require('../services/examsService')
const QuestionsService = require('../services/questionService')
const router = express.Router()

router.get('/', ExamsService.getExams)
router.get('/id', ExamsService.getExamById)
router.post('/', ExamsService.createExam)

router.post('/questions', QuestionsService.createQuestions)
router.get('/questions', QuestionsService.getQuestions)

router.post('/questions/answer', QuestionsService.assignCorrectOption)

module.exports = router
