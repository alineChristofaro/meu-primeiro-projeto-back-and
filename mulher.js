const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
 response.json({
    nome: 'Aline Christófaro',
    imagem: 'https://www.linkedin.com/in/aline-christ%C3%B3faro-25141b1b0/?originalSubdomain=br',
    minibio: 'Estudante de engenharia urbana e assistente de projetos'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)