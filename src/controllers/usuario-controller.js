import {Usuario} from "../models/usuario-model.js"
import {bd} from '../infra/sqlite-db.js'
import { UserDAO } from "../DAO/usuarios-dao.js"

export const usuario = (app)=>{
const newUserDao = new UserDAO(bd)

    app.get('/usuario', (req, res)=>{
        newUserDao.listarUsers()
        .then((result)=>{res.send(result)})
        .catch((error)=>{res.send(error)})
    })
    
    // req = requisição
    // res = resposta
    app.get('/usuario/:nome', (req, res)=>{
        newUserDao.listarUserEspecifico(req.params.nome)
        .then((result)=>{res.send(result)})
        .catch((error)=>{res.send(error)})
    })

    app.post('/usuario', (req, res)=>{
        const body = req.body;
        const newUser = new Usuario(body.nome, body.email, body.senha)
        // bd.usuarios.push(newUser)
        // res.send({"Novo usuário": newUser})
        
        newUserDao.inserirUsers(newUser)
        .then((result)=>(res.send(result)))
        .catch((error)=>{res.send(error)})
    })

    app.put('/usuario/:id', (req, res)=>{
        const dadoNovo = req.body // oq passamos na requisição (mudanças que serão feitas)
        newUserDao.atualizarUsers(dadoNovo, req.params.id)
        .then((result)=>(res.send(result)))
        .catch((error)=>{res.send(error)})
    })

    app.delete('/usuario/:id', (req, res)=>{
        newUserDao.deletarUsers(req.params.id)
        .then((result)=>(res.send(result)))
        .catch((error)=>{res.send(error)})
    })
}