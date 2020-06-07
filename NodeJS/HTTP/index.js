var http = require('http')

http.createServer((req, res) => {
    res.end('Hey daddy, this is my site!')
}).listen(7050)

console.log("Servidor está aberto!")