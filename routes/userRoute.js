// Criando uma simulação de rota de usuário (criar e ler)
const fs = require("fs") // módulo p/ lidar com arquivos de sistema
const {join} = require('path') // para lidar com pastas de arquivos

// Vamos simular um banco de dados com um arquivo JSON
const filePath = join('/', 'users.json') // users - lista de usuários

// Vamos criar um método simples para consultar o usuário
const getUsers = () => {
    const data = fs.existsSync(filePath) // se o arquivo filePath existe
    ? fs.readFileSync(filePath) // vamos abrir o arquivo de maneira síncrona
    : [] // se o arquivo não existir retorne um objeto vazio

    try { // vamos tratar qualquer erro que houver
        return JSON.parse(data)
    } catch (error) {
        return [] // havendo algum problema na leitura retornaremos um objeto vazio
    }
}

// Vamos criar um método para salvar o usuário

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t')) 
// vamos fazer tabulação pra cada user

// passamos como dependência o próprio app
const userRoute = (app) => {
    // a rota /users cuidará de todas as requisições get/post/put/delete
    // id pode ser usado como parâmetro adicional 
    app.route('/users/:id?')
    // vamos criar o get
    .get((req, res) => {
        const users = getUsers() // usa a função pra ler e
        res.send({users}) // envia resposta com os usuários
    })
    .post((req, res) => {
        const users = getUsers() // criando o método post
        // inserimos novo registro no objeto usando o body(corpo da requisição, dos campos
        // que enviamos no formulário)
        // Ficará disponível o nome do campo e seu valor
        users.push(req.body) //como users é um array podemos usar o push

        // usa o objeto atualizado e salva no arquivo json
        saveUser(users)

        // Damos uma resposta positiva informando criação do usuário
        res.send(201).send("OK")

/*
  Para poder transformar os dados que recebemos do cabeçalho da requisição http em um objeto
  precisamos instalar um middleware pro express (bodyParser)
*/

    })
}

module.exports = userRoute // exportando o módulo para usar externamente