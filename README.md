# examAPI
exam API built with NodeJS, Express, Postgres and Sequelize ORM

Firstly you should clone this repo and do a npm install. Dont forget you need PostgresSQL in your device to run it.

After that, you have to go to database.js wich is located inside config folder (src/config/database.js) and fill it with your postgres infos (host, username and password)

Now you gotta run the command bellow:

npx sequelize db:create This command will create a database called exams

npx sequelize db:migrate This command will use the migrations located at src/database/migrations to set up all the tables

node server.js

And now it should be up and running
