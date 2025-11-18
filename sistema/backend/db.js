// Meu arquivo de conexão com o banco de dados 
const mysql = require('mysql2/promise')
//pool de conexao
const conexao = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"banco_projeto.sql",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
//
module.exports = conexao 