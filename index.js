const express = require("express") // instala o framework express
const app = express() // express como função
const port = 3000 // vai rodar em http://localhost:3000

app.listen(port, (req, res) => {
    console.log("Node rodando na porta " + port + "...")
})

