const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

let lista = [
    {"id":1,"nome":"primeiro","email":"primeiro@teste.br"},
    {"id":2,"nome":"segundo","email":"segundo@teste.br"}
]

server.post('/autores', (req, res) => {
    lista.push(req.body);
    res.send(lista);
})
server.get('/', (req, res)=>{
    res.send('<h1>home</h1>')
})

server.get('/autores', (req,res) =>{
    res.send(lista);
})
server.listen(3001, ()=>{
    console.log('Servidor na porta 3001')
})
