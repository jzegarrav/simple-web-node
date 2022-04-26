require('colors')
const hbs=require('hbs')
require('dotenv').config()

const express = require('express')
const app=express()
const port=process.env.PORT

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Servir contenido estatico para el HomePage
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home', {
        nombre:'Juan Carlos Zegarra',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req,res)=>{
    res.render('generic', {
        nombre:'Juan Carlos Zegarra',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre:'Juan Carlos Zegarra',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(8080, ()=>{
    console.log(`Ejemplo de app escuchando http://localhost:${port}`.yellow)
})