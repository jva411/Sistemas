const Sequelize = require('sequelize')

module.exports = {
    nome: {
        type: Sequelize.STRING(40)
    },
    email: {
        type: Sequelize.STRING(50)
    },
    idade: {
        type: Sequelize.TINYINT
    }
}