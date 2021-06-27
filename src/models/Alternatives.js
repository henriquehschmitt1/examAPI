const { Model, DataTypes } = require('sequelize')

class Alternatives extends Model {
    static init(sequelize) {
        super.init({
            option: DataTypes.CHAR,
            description: DataTypes.STRING,
            questionId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Alternatives