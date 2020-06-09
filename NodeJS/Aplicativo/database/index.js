const config = require('../config.json').database
const User = require('../users/User')
const Sequelize = require('sequelize')
const db = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: 'mysql'
})
const models = require('./models')
const defineds = {}
Object.keys(models).map(E=> defineds[E] = db.define(E, models[E]))

module.exports = {

    createCommentsTable: ()=>{
        defineds.Comments.sync()
    },

    createUsersTable: ()=>{
        defineds.Usuarios.sync()
    },

    /** @param {function(string[])} callback - Will called when finishes query */
    loadComments: callback=>{
        let comments = []
        defineds.Comments.findAll().then(query=>{
            query.forEach(E=>{
                comments.push(E.dataValues.comment)
            })
        })
        callback(comments)
    },

    /** @param {function(User[])} callback - Will called when finishes query */
    loadUsers: callback=>{
        let users = []
        let loadComments = () =>{
            defineds.Comments.findAll().then(query=>{
                query.forEach(E=>{
                    users[E.dataValues.email].comments.push(E.dataValues.comment)
                })
                callback(users)
            })
        }
        defineds.Usuarios.findAll().then(query=>{
            query.forEach(E=>{
                users[E.dataValues.email] = new User(
                    E.dataValues.name,
                    E.dataValues.email,
                    E.dataValues.age
                )
            })
            loadComments()
        });

    },

    /** 
     * @param {User} user 
     * @description Update an already existing user
     */
    saveUser: user=>{
        defineds.Usuarios.update({
            where:{
                email: user.email
            },
            name: user.name,
            age: user.age
        })
    },
    
    /** @param {User} user */
    registerUser: user=>{
        defineds.Usuarios.create(user)
    },

    /** @param {User} user */
    removeUser: user=>{
        defineds.Usuarios.destroy({
            where: {
                email: user.email
            }
        })
    },

    /**
     * @param {User} user
     * @param {string} comment
     * @param {function(number)} callback - Returns ID of comment
     */
    registerComment: (user, comment, callback)=>{
        defineds.Comments.create({
            comment: comment,
            email: user.email
        }).then(query=>{
            callback(query.dataValues.id)
        })
    },

    /** @param {number} id - ID of comment */
    removeComment: id=>{
        defineds.Comments.destroy({
            where: {
                id: id
            }
        })
    },

}