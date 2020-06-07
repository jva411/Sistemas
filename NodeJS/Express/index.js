const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// GET Method
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', (req, res) =>{
    res.send('Sobre nós')
})
app.get('/sobre/:p1?/:p2?', (req, res) =>{
    var str = "<ul>"
    Object.values(req.params).forEach(E => str += E ? ("<li>" + E + "</li>") : "")
    str += "</ul>"
    res.send(str)
})



// POST Method
app.post('/api', require('./api'))





app.listen(7050, () => {
    console.log("Server online!")
})