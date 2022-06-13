import express from 'express'
const app =  express()
const port = 3000;

app.get('/usuario', (req, res)=>{
    res.send("Rota ativada com GET e recurso Usuário: valores de Usuário devem ser retornados")
})

app.get('/tarefa', (req, res)=>{
    res.send("Rota ativada com GET e recurso Tarefa: valores de Tarefa devem ser retornados")
})

app.listen(port, ()=>{
    console.log("Ta rodando meu consagrado")
})