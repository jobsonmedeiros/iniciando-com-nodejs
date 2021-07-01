const express = require('express') // instala o framework express - dependência
const bodyParser = require('body-parser') 
const userRoute = require("./routes/userRoute.js")// Usando a modularização do node vamos importar o routes

const app = express() // express como função

const port = 3000 // vai rodar em http://localhost:3000 (na porta 3000)

app.use(bodyParser.urlencoded({extended: false})) // faz a transformação dos dados do post em obj 

// vamos usar a função userRoute passando como dependência nosso app
// vamos usar o postman pra testes dos métodos HTTP
userRoute(app)

// Mensagem tentando acessar o servidor via http: "Cannot GET /"
// Precisamos liberar o método http - a "/" vai ser o root da aplicação
app.get("/", (req, res) => {res.send(("Olá, mundo. Estou usando o express :D"))}) 

// Mensagem ok. Express adicionado como dependência com sucesso!

// função de callback que dirá quando a API está pronta para ser
// usada.
app.listen(port, () => {console.log("API rodando na porta " + port + "...")})