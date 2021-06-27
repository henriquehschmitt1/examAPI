const { Model, DataTypes } = require('sequelize')

class Questions extends Model {
    static init(sequelize) {
        super.init({
            question : DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Questions