const Sequelize = require('sequelize')

module.exports = {
    name: Sequelize.STRING(40),
    email: Sequelize.STRING(50),
    age: Sequelize.TINYINT
}