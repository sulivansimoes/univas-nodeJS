var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

//Executando express
var app = express();

//Setando engine para ejs
app.set('view engine', 'ejs');

//Setando diretório das views
app.set('views', './app/views');

//identifica diretório com informações estaticas
//faz o mapeamento dos arquivos
app.use(express.static('./app/public'));

//Incluindo body-parser ao projeto
app.use(bodyParser.urlencoded({ extended:true }) );

//Incluindo o express-validator ao projeto
app.use( expressValidator() );

//Incluindo diretório de rotas,models,controlers etc, por meio do consign. 
//Ele faz autoload dos arquivos
consign().include('app/routes')
         .then('config/dbConnection.js')
         .then('app/models')
         .then('app/controllers')
         .into(app);

//Exportando servidor confiugurado.
module.exports = app; 