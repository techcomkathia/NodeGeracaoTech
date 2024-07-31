const express = require('express');
const app = express();

let estoque = [
    {id: 1, nome: 'tomate', preco: 5.0},
    {id: 2, nome: 'cebola', preco: 10.0},
    {id: 3, nome: 'cenoura', preco: 7.0}
]

let usuarios = [
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'José'}
]
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/sobre', (req, res) => {
    res.send('Sobre');
})

app.get('/estoque', (req, res) => {
    res.json(estoque);
})

// app.get('/usuarios', (req, res) => {
//     res.json(usuarios);
// })

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(usuario => usuario.id == id);
    if(usuario){
        res.json(usuario);
    }else{
        res.status(404).send('Usuário não encontrado');
    }
})

app.get('/usuarios', (req,res) => {
    const nome = req.query.nome
    let usuario = usuarios
    if(nome){
        usuario = usuarios.filter(usuario => usuario.nome == nome);
    }
    res.status(200)
    res.json(usuario);

})






app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    if(!usuario || !usuario.nome){
        let objErro = {
            statusCode: 400,
            mensagem: 'Usuário inválido'
        }
        res.status(400).json(objErro);
        return;
    }
    usuarios.push(usuario);
        let objSucesso = {
            statusCode: 201,
            mensagem: 'Usuário criado com sucesso',
            detalhes: usuario
        }
        res.status(201).json(objSucesso);
})


app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    if(!usuario || !usuario.nome){
        let objErro = {
            statusCode: 400,
            mensagem: 'Usuário inválido',
            infoUsuario: usuario
        }
        res.status(400).json(objErro);
        return;
    }
    const index = usuarios.findIndex(usuario => usuario.id == id);
    if(index == -1){
        let objErro = {
            statusCode: 404,
            mensagem: 'Usuário não encontrado'
        }
        res.status(404).json(objErro);
        return;
    }
    usuarios[index] = usuario;
    let objSucesso = {
        statusCode: 200,
        mensagem: 'Usuário atualizado com sucesso',
        detalhes: usuario
    }
    res.status(200).json(objSucesso);
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = usuarios.findIndex(usuario => usuario.id == id);
    if(index == -1){
        let objErro = {
            statusCode: 404,
            mensagem: 'Usuário não encontrado'
        }
        res.status(404).json(objErro);
        return;
    }
    usuarios.splice(index, 1);
    let objSucesso = {
        statusCode: 200,
        mensagem: 'Usuário removido com sucesso'
    }
    res.status(200).json(objSucesso);
})



app.listen(3000, () => {
    console.log('Servidor está rodando http://localhost:3000');
  })