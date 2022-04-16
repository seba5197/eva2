const express = require('express')
const Cargavistas = require('./controladores/Cargavistas.js')
const SqlClient = require('./lib/SqlClient.js')
const UsuariosDAO = require('./model/UsuariosDAO.js')

const router = express.Router()
const sqlClient = new SqlClient()

// Controllers
const Usuariosdao = new UsuariosDAO(sqlClient)

//Usuariosdao.getAll().then(rows => console.log(rows))


const vistas = new Cargavistas(sqlClient)

// Routes
router.get('/', vistas.renderInicio)
router.post('/', vistas.renderInicioagrega)
router.post('/mod', vistas.renderModifica)
router.get('/mod', vistas.renderModificaform)
router.post('/del', vistas.renderDelete)
router.post('/getbyid', vistas.renderById)

router.get('/del', vistas.renderNotFound)


router.get('*', vistas.renderNotFound)


//router.get('*', pageController.renderNotFound)

module.exports = router