//arquivo de configuração da dependencia express 
//

const port = 3003
//quem faz o parse do body da requisição
const bodyParser = require('body-parser')

//servidor web que roda em cima do node
const express = require('express')
const server = express()

//habilitando cors
const allowCors = require('./cors')

//confg dizendo ao servidor usar o bodyparse q suportar tipos de dados que o padrão de url encoder
//todas as requisições que passar para o servidor ira passar por este midware
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

//ira permitir que uma requisição de um determinado server 
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server