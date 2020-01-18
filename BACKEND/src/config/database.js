//referencia para o mongoo
//faz o mapeamento dos pbj javascript para os obj que vai para o mongo
//quem abre a connection para o mongo
const mongoose = require('mongoose')

//remove msg de advertencia 
mongoose.Promise = global.Promise

//conexão
module.exports = mongoose.connect('mongodb://localhost/todo')