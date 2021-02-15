
const express = require('express')
const route = express.Router()
const nodemailer = require('nodemailer')

route.post('/', (req, res, next) => {
    
     //Enviando e-mail com nodemailer
     let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'luigistemar@gmail.com',
            pass: process.env.NM_PASS,
        }    
    })
    
    transporter.sendMail({

        from: "'Formulário do Site' < luigistemar@gmail.com >",

        to: 'luigistemar@gmail.com',

        replyTo: req.body.email,

        subject: 'Formulário do Site',

        html: `Nome: ${req.body.nome}<br> Fone: ${req.body.fone}<hr> 
        <br> ${req.body.mensagem}`,

        //Enviar com anexo
        /*attachments:[{
            filename: req.file.originalname,
            path: req.file.path
        }]*/
    })   

    return res.status(201).send()

})


module.exports = route