
# Description

This is an API made with NodeJS, Express, PostgresSQL and Sequelize ORM. It's basically a CRUD for an exams context, wich contains title, questions, alternatives and answers.

## Requirements

* NodeJS (v14.16.0)
* PostGresSQL (v13.3)

## Config

Go to database.js wich is located inside config folder (src/config/database.js) and fill it with your postgres infos (host, username and password).

## Installation

Use the package manager npm for the following steps.

```bash
npm install
```

This command will create a database called exams.
```bash
npx sequelize db:create
```

This command will use the migrations located at src/database/migrations to set up all the tables.
```bash
npx sequelize db:migrate
```

## Routes
All routes, by default, are served at localhost port 8080.

## GET Routes

* /exams - This route will get all the exams.
* /exams/questions - This route wil get all the questions.
* /exams/id?id=1 - This route will get one exam and all of its questions.

## POST Routes

* /exams - This route will let you create an exam, by passing the exam title and questions id on the body

```bash
{
    "title" : "OOP test",
    "questions" : [1]
}
```

* /exams/questions - This route will let you create a question, by passing the question, the options and the descriptions of the options on the body.

```bash
{
    "question": "What is 1+1",
    "options" : ["A", "B", "C"],
    "descriptions" : ["2", "3", "9"]
}
```

* /exams/questions/answer - This route will let you assign wich option is correct for a specific question, by passing the question id and the option id on the body.

```bash
{
    "questionId": 1,
    "optionId" : 2
}
```
