const express = require('express')
const path = require('node:path')
const rotas = require('./routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.use(rotas)

const PORT = 1000
app.listen(PORT, () => console.log(`servidor está funcionando corretamente e \nOnline em http://localhost:${PORT}/`));
