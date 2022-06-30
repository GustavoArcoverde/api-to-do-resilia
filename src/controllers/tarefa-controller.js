import { Tarefa } from "../models/tarefa-model.js"
import {bd} from '../infra/sqlite-db.js'

export const tarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send(bd.tarefas)
    })
    app.post('/tarefa', (req, res) => {
        const body = req.body
        const novaTarefa = new Tarefa (body.titulo, body.descricao, body.status, body.data, body.criacao)
        bd.tarefas.push(novaTarefa)
        res.send({"Tarefa": novaTarefa})
    })
}
