# react-redux-node

criando packege.json (arquivo onde ira ter as dependencias)

npm init -y 

OBS> [-y = serve para responder todas as perguntas de forma automatica]


{
  "name": "BACKEND",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

apos arquivo criado arquivo devo declarar as dependencias

npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5


body-parser: 
responsavel por fazer o parse do body da requisição, pois quando a requisição chega ela chega em formato string.
sera o responsavel por le os obj da requisição e converter em javascript

express:
framework web 

mongoose:
framework responsavel por acessar o banco de dados (mongo), tem o framework que faz o squema entre os obj javascript e os objs que seram persistido no mongo, alem de ter as validações e outros

node-resfull:
é quem simplifica a api rest [https://github.com/baugarten/node-restful]

pm2: 
è um laucher ,O PM2 é um gerenciador de processos para o tempo de execução JavaScript.
é o responsavel por iniciar a aplicação.
quem monitora a memoria , processamento.

Primeira parte de dependencias instaladas , agora instalar as dependencias que iremos usar somente em ambiente de deesnvolvimento

npm i --save-dev -E nodemon@1.11.0

nodemon:
O Nodemon é um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor.

apos
{
  "name": "BACKEND",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "1.15.2",
    "express": "4.14.0",
    "mongoose": "4.7.0",
    "node-restful": "0.2.5",
    "pm2": "2.1.5"
  },
  "devDependencies": {
    "nodemon": "1.11.0"
  }
}

EDITANDO ARQUIVO
{
  "name": "BACKEND",
  "version": "1.0.0",
  "description": "",
  "main": "src/loader.js",

// crio 2 scripts 
//dev que chama o nodemon a dependencia que foi instalada para ambiente de dev
//production que chama o pm2 dependencia para produção 

  "scripts": {
    "dev": "nodemon",
    "production": "pm2 start src/loader.js --name todo-app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "1.15.2",
    "express": "4.14.0",
    "mongoose": "4.7.0",
    "node-restful": "0.2.5",
    "pm2": "2.1.5"
  },
  "devDependencies": {
    "nodemon": "1.11.0"
  }
}

