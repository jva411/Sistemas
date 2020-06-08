const config = require('./config.json')
const Sequelize = require('sequelize')
const db = new Sequelize(config.database.name, config.database.user, config.database.password, { 
    host: config.database.ip,
    dialect: 'mysql'
})

// db.authenticate().then(()=>{
//     console.log("Conectado com sucesso!")
// }).catch(err=>{
//     console.log("Falha ao se conectar: " + err)
//     proccess.exit(0)
// })

const models = require('./models')
Object.keys(models).forEach(E=>{
    models.defineds[E] = db.define(E, models[E])
})

models.defineds.Usuarios.sync()

models.defineds.Usuarios.findAll({
    where: {
        idade: {
            [Sequelize.Op.lt]: 99
        }
    }
}).then(query=>{
    query.map(E => {
        console.log(E.dataValues)
        return E
    })
})





