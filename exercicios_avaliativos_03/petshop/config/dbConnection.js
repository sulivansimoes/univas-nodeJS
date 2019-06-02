var mysql = require("mysql");

var connMySQL = function(){

    var connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'',
        database:'petshop'
    });

    return connection;
};

module.exports = function(){
    return connMySQL;
};
