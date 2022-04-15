const express = require('express')
const Cargavistas = require('./controladores/Cargavistas.js')
const SqlClient = require('./lib/SqlClient.js')
const UsuariosDAO = require('./model/UsuariosDAO.js')

const router = express.Router()
const sqlClient = new SqlClient()

const Usuariosdao = new UsuariosDAO(sqlClient)

Usuariosdao.getAll().then(rows => console.log(rows))

// Controllers
const vistas = new Cargavistas()
// Routes
router.get('/', vistas.renderInicio)

//router.get('*', pageController.renderNotFound)

module.exports = router
