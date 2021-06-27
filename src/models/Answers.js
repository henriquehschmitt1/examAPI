const { Model, DataTypes } = require('sequelize')

class Answers extends Model {
    static init(sequelize) {
        super.init({
            alternativeId: DataTypes.INTEGER,
            questionId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Answers