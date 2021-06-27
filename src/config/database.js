//used to config a postgres database

module.exports = {
    dialect : 'postgres',
    host : 'localhost',
    username : 'postgres',
    password: '123456',
    database: 'exams',
    define : {
        timestamps : true,
    }
}