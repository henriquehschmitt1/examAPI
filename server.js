require('./src/database/index')
const express = require('express');
const exams = require('./src/routes/routes')

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/exams', exams)

app.listen(port);
console.log('Server started at http://localhost:' + port);