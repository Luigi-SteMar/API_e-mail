
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()


const rotaEmail = require('./routes/e-mail')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/email', rotaEmail)



module.exports = app