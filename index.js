const express = require("express") // instala o framework express
const app = express() // express como função
const port = 3000 // vai rodar em http://localhost:3000

// função de callback que dirá quando a API está pronta para ser
// usada.
app.listen(port, () => {console.log("API rodando na porta " + port + "...")})

// Mensagem tentando acessar o servidor via http: "Cannot GET /"
// Precisamos liberar o método http - a "/" vai ser o root da aplicação
app.get("/", (req, res) => {res.send(("Olá, mundo. Estou usando o express :D"))}) 

// Mensagem ok. Express adicionado como dependência com sucesso!

