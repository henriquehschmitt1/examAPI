const { Model, DataTypes } = require('sequelize')

class Exams extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            questions: DataTypes.ARRAY(DataTypes.INTEGER)
        }, {
            sequelize
        })
    }
}

module.exports = Exams