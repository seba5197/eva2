const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs = require('hbs')

const router = require('./router')

const app = express()

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');

hbs.registerPartials(path.join(__dirname, 'vistas', 'partials'))
app.set('views', path.join(__dirname, 'vistas'))
app.set('view engine', 'hbs')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)


module.exports = app
