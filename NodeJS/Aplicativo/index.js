const express = require('express')
const app = express()
const port = process.env.PORT || 25560
const bodyParser = require('body-parser')
const User = require('./users/User')
const db = require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

db.createCommentsTable()
db.createUsersTable()

/** @type {User[]} */
var users
var comments
db.loadUsers(Users =>{
    users = Users
})
db.loadComments(Comments =>{
    comments = Comments
    console.log(comments)
})
// db.registerComment(new User("a", "B", 5), "asd", id=>{
//     console.log(id)
// })





app.get("/", (req, res)=>{
    let html =
        `<html>
            <head>
                <meta charset="utf8">
            </head>
            <body>
                <h1>Bem vindo!</h1>
                <ul>`
                    Object.values(comments).forEach(E => {
                        html += "<li>" + E + "</li>"
                    });
    html +=
                `</ul>
                <form action="api/comments/new" method="POST">
                    <input type="text" name="email" placeholder="Email">
                    <textarea name="comment" placeholder="Comente aqui"></textarea>
                    <button type="submit">Comentar</button>
                </form>
            </body>
        </html>`
    res.send(html)
})

app.get('/register', (req, res)=>{
    let html = `
    <html>
        <head>
            <meta charset="utf8">
        </head>
        <body>
            <form action="/api/register" method="POST">
                <input type="text" name="name" placeholder="Nome">
                <input type="text" name="email" placeholder="Email">
                <input type="number" name="age" placeholder="Idade">
                <button type="Submit">Registrar</button>
            </form>
        </body>
    </html>
    `
    res.send(html)
})


app.post('/api/register', (req, res)=>{
    db.registerUser(req.body)
    users[req.body.email] = new User(req.body.name, req.body.email, req.body.age)
    res.send("Registrado com sucesso! Volte à página principal!")
})

app.post('/api/comments/new', (req, res) =>{
    let user = users[req.body.email]
    if(user){
        db.registerComment(users[req.body.email], req.body.comment, id=>{
            comments[id] = req.body.comment
        })
        user.comments.push(req.body.comment)
        comments.push(req.body.comment)
        res.send("Comentário enviado com sucesso! Volte à página principal!")
    }else res.send("Usuário inválido! Volte à página principal!")
})












app.listen(port)