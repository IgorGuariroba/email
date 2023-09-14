const express = require('express')
require('dotenv').config()

const app = express();

app.get('/', (req, res) => {

    const apiUrl = process.env.API_URL
    const apiUser = process.env.API_USUARIO
    const apiKey = process.env.API_CHAVE

    res.send('Email enviado')
})

app.listen(8080,() => {
    console.log('Servidor iniciado')
})