const Sequelize = require('sequelize')

module.exports = {
    comment: Sequelize.TEXT,
    email: Sequelize.STRING(50)
}