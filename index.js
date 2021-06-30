const express = require("express")
const app = express()
const port = 3000

listen("/", () => {
    console.log("Node rodando na porta 3000...")
})