const express = require('express')
const cors = require('cors')
const mysql = require ('mysql2/promise')
const crypto = require('crypto')
const porta = 3000
const app = express()
const conexao = require ('./db.js')

app.use(cors())
app.use(express.json())

app.post("/mensagensfaleconosco", async (req,res)=>{
    try{
        const {nome_completo, telefone, email, assunto, mensagem} = req.body
        const dt_ehr = new Date();
        const status = 'Aguardando leitura';
    
    if(nome_completo.length <6){
        return res.json({"resposta":"Preencha o nome completo"}) 
    }else if (email.length < 6){
        return res.json({"resposta":"Preencha o email"})
    }else if (assunto.length < 6){
        return res.json({"resposta":"Preencha o assunto"})
    }else if (mensagem.length < 6){
        return res.json({"resposta":"Preencha a mensagem"})
    }else if (!email.includes('@')) {
        return res.json({"resposta":"O e-mail está sendo inserido incorretamente (ex: @gmail.com ou hotmail.com)"})
    }else if (!email.includes('.')) {
        return res.json({"resposta":"O e-mail está sendo inserido incorretamente (ex: @gmail.com ou hotmail.com)"})
    }
  
    sql = `INSERT INTO fale_conosco (nome_completo, telefone, email, assunto, mensagem, dt_ehr, status) VALUES (?,?,?,?,?,?,?)`
    
    let [resultado2] =  await conexao.query(sql, [nome_completo,telefone, email, assunto, mensagem, dt_ehr, status])
    
    if (resultado2.affectedRows == 1){ 
        return res.json({"resposta":"Mensagem foi enviada com sucesso"})
    }else{
        return res.json({"resposta":"Erro ao mandar a mensagem!"})
    }
    }catch(error){
    console.log(error)
}
})

app.listen(porta,()=>{
    console.log("Servidor rodando")
})