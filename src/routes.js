const express = require ('express')
const rotas = express.Router()

rotas.get('/', (req, res)=>{
    res.send('Está tudo ok !!')
})

module.exports = rotas;