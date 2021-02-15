
const express = require('express')
const app = express()

app.use('/enviar', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo'
    })
})

module.exports = app