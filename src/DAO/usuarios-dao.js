export class UserDAO {
    constructor(bd) {
        this.bd = bd
    }
    listarUsers() {
        return new Promise((reject, resolve) => {
            this.bd.all(`SELECT * FROM USUARIOS`, (error, result) => {
                if (error) {
                    reject("Deu pobrema")
                } else {
                    resolve({ result })
                }
            })
        })
    }
    listarUserEspecifico(nome) { // passamos o parametro 'nome' pois quando chamarmos isso no user controller, teremos de passar o argumento req.params.nome, que ele n lê se passarmos direto aqui
        return new Promise((reject, resolve) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE NOME = ?", [nome], (error, result) => {
                if (error) {
                    reject("Deu pobrema")
                } else {
                    resolve({ result })
                }
            })
        })
    }
    
    inserirUsers(userParam) {
        return new Promise((reject, resolve) => {
            this.bd.run("INSERT INTO USUARIOS (nome, email, senha) VALUES(?, ?, ?)", [userParam.nome, userParam.email, userParam.senha], (error) => {
                if (error) {
                    reject(`Erro ao inserir: ${error}`)
                } else {
                    resolve("Ta feito, chefia")
                }
            })
        })
    }

    atualizarUsers(dadoNovo, id){
        return new Promise((reject, resolve)=>{
            this.bd.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?", [dadoNovo.nome, dadoNovo.email, dadoNovo.senha, id],(error)=>{ // tem como atualizar mais de um item por vez? se sim, como?
                if(error){
                    reject(`Erro ao inserir: ${error}`)
                }else{
                    resolve("Deu boa, familia")
                }
            })
        })
    }
    deletarUsers(id){
        return new Promise((reject, resolve)=>{
            this.bd.run("DELETE FROM USUARIOS WHERE ID = ?", [id], (error)=>{
                if(error){
                    reject(`Erro ao inserir: ${error}`)
                }else{
                    resolve(`Usuário deletado`)
                }
            })
        })
    }
}