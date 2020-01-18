//config da api restfull
//node restful cria uma camada em cima do mongoose, comose fose uma casca
//dando uma api rest pronta
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema(
    {
        description: {type: String, required: true},
        done: {type: Boolean, required: true, default: false},
        createAt: {type: Date, default: Date.now}
    }
)
module.exports = restful.model('Todo', todoSchema)