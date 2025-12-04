const express = require('express')
const cors = require('cors')
const mysql = require ('mysql2/promise')
const crypto = require('crypto')
const porta = 3000
const app = express()
const conexao = require ('./db.js')

app.use(cors())
app.use(express.json())

app.post("/faleconosco", async (req,res)=>{
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
    
    let [resultado2] =  await conexao.query(sql, [nome_completo, telefone, email, assunto, mensagem, dt_ehr, status])
    
    if (resultado2.affectedRows == 1){ 
        return res.json({"resposta":"Mensagem foi enviada com sucesso"})
    }else{
        return res.json({"resposta":"Erro ao mandar a mensagem!"})
    }
    }catch(error){
    console.log(error)
}
})
app.post("/cadastro", async (req,res)=>{
    try{
        const {nome_completo, dt_nasc, cpf, telefone, email, endereco } = req.body
        let {senha} = req.body
        // validar as informações
        senha = senha.trim()
        senha = senha.replace(" ","")

    
        if (senha.length < 6) {
            return res.json({"resposta": "A senha tem que conter no mínimo 6 caracteres!"})
        }
        if (email.length < 6) {
            return res.json({"resposta": "Preencha o email"})
        }
        if (nome_completo.length < 6) {
            return res.json({"resposta": "O nome tem que conter no mínimo 6 caracteres!"})
        }
        if (dt_nasc.length === 0) { // Validação simples de preenchimento
            return res.json({"resposta": "Preencha a sua data de nascimento"})
        }
        if (cpf.length !== 11) { // CPF deve ter 11 dígitos (após remover pontos/traços)
            return res.json({"resposta": "O CPF deve ter 11 dígitos!"})
        }
        if (telefone.length < 10) { // Telefone (com DDD) deve ter no mínimo 10 dígitos
            return res.json({"resposta": "O telefone (com DDD) deve ter no mínimo 10 dígitos!"})
        }
        if (endereco.length < 1) {
            return res.json({"resposta": "Preencha o seu endereço"})
        }

        // Restante do código (Consulta de email, Hash e INSERT)
        let sql = `SELECT * FROM cadastro WHERE email = ?`
        let [resultado] = await conexao.query(sql,[email])
    if(resultado.length != 0){
        return res.json({"resposta":"Email já cadastrado"})
    }

    const hash = crypto.createHash("sha256").update(senha).digest("hex")

    
    sql = `INSERT INTO cadastro (nome_completo, dt_nasc, cpf, telefone, email, endereco, senha) VALUES (?,?,?,?,?,?,?)`
    
    let [resultado2] =  await conexao.query(sql, [nome_completo, dt_nasc, cpf, telefone, email, endereco, hash ])
    
    if (resultado2.affectedRows == 1){ 
        return res.json({"resposta":"Cadastro efetuado com sucesso"})
    }else{
        return res.json({"resposta":"Erro ao fazer cadastro!"})
    }
    }catch(error){
    console.log(error)
}
})

app.post("/login", async (req,res)=>{
    try{
        const {nome_usuario} = req.body
        let {senha} = req.body
        // validar as informações
        senha = senha.trim()
        senha = senha.replace(" ","")
    if(nome_usuario.length <6){
        return res.json({"resposta":"Preencha o nome de usuário"}) 
    }
    sql = `INSERT INTO login (nome_usuario, senha) VALUES (?,?)`
    
    let [resultado2] =  await conexao.query(sql, [nome_usuario])
    
    if (resultado2.affectedRows == 1){ 
        return res.json({"resposta":"Entrada com sucesso"})
    }else{
        return res.json({"resposta":"Erro ao entrar, usuário ou senha inválido!"})
    }
    }catch(error){
    console.log(error)
}
})

app.listen(porta,()=>{
    console.log("Servidor rodando")
})