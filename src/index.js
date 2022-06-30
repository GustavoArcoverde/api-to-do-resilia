import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000;

//middlewares
app.use(cors())
app.use(express.json())

import {usuario} from './controllers/usuario-controller.js'
usuario(app)

import {tarefa} from './controllers/tarefa-controller.js'
tarefa(app)

app.listen(port, ()=>{
    console.log("Ta rodando meu consagrado")
})