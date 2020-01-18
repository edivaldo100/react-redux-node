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

######################################

FRONT

npm init -y

npm i --save-dev webpack@1.14.0 
npm i --save-dev webpack-dev-server@1.16.2

npm i --save-dev babel-core@6.22.1 
npm i --save-dev babel-loader@6.2.10 
npm i --save-dev babel-plugin-react-html-attrs@2.0.0 
npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0 
npm i --save-dev babel-preset-es@6.22.0 
npm i --save-dev babel-preset-react@6.22.0



{
  "name": "frontend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --hot",
    "production": "webpack --progress -p"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "axios": "^0.15.3",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-react-html-attrs": "^2.0.0",
    "babel-plugin-transform-object-rest-spread": "^6.22.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "bootstrap": "^3.3.7",
    "css-loader": "^0.26.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "font-awesome": "^4.7.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-redux": "^5.0.2",
    "react-router": "^3.0.2",
    "redux": "^3.6.0",
    "redux-multi": "^0.1.12",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.2.0",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}