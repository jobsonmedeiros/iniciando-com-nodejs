const express = require('express') // instala o framework express
// Usando a modularização do node vamos importar o routes
const userRoute = require("./routes/userRoute.js")

const app = express() // express como função
const port = 3000 // vai rodar em http://localhost:3000

// vamos usar a função userRoute passando como dependência nosso app
// userRoute(app) // vamos usar o postman pra testes
userRoute(app)

// Mensagem tentando acessar o servidor via http: "Cannot GET /"
// Precisamos liberar o método http - a "/" vai ser o root da aplicação
app.get("/", (req, res) => {res.send(("Olá, mundo. Estou usando o express :D"))}) 

// Mensagem ok. Express adicionado como dependência com sucesso!

// função de callback que dirá quando a API está pronta para ser
// usada.
app.listen(port, () => {console.log("API rodando na porta " + port + "...")})