const { redirect } = require('express/lib/response')
const SqlClient = require('../lib/SqlClient.js')
const UsuariosDAO = require('../model/UsuariosDAO.js')

class Cargavistas {

  constructor(db){
    const sqlClient = new SqlClient()

    this.usuarios = new UsuariosDAO(sqlClient)
    this.renderInicio = this.renderInicio.bind(this)
    this.renderInicioagrega = this.renderInicioagrega.bind(this)
    this.renderModifica = this.renderModifica.bind(this)
    this.renderModificaform = this.renderModificaform.bind(this)
    this.renderDelete = this.renderDelete.bind(this)
    this.renderById = this.renderById.bind(this)
  }

  async renderDelete (req, res) {
    const {id} = req.body
    const usuarioeliminadoarray = await this.usuarios.getById(id)
    const usuariosdatos2 = await this.usuarios.Delete(id)
    const usuarioeliminadojson=usuarioeliminadoarray[0]
    const usuariosdatos = await this.usuarios.getAll()
    res.render('home', 
      {
      titulo : 'Usuario Eliminado ->'+usuarioeliminadojson.nombre,
      usuariosdatos
      }
    )
    }

  async renderById (req, res) {
      const { id } = req.body
      const usuariosdatos = await this.usuarios.getById(id)
      const usuariojson=usuariosdatos[0]
      console.log("el id enviada es ", id)
      res.render('byid', 
        {
          titulo : 'Detalles Usuario',
          usuariojson
        }
        )
  }


  renderNotFound (req, res) {
      res.render('404', 
        {
        titulo : 'No se Encontró la página',
        
        }
        )
      }
  async renderModificaform (req, res) {
    const id = req.query.id
    if(!id){
      res.render('404', 
        {
          titulo : 'No se Encontró la página',
        }
        )
      }else
        {
        const usuariosdatos = await this.usuarios.getById(id)
        res.render('mod', 
        {
          titulo : 'Modificar usuario',
          usuariosdatos 
        }
        )
        }
  }   

  async renderInicio (req, res) {
    const usuariosdatos = await this.usuarios.getAll()
    res.render('home', 
      {
        titulo : 'Registro usuarios',
        usuariosdatos
      }
    )
}

  async renderModifica (req, res) {
    const { id,nombre, correo } = req.body

    const usuario = {
      nombre : nombre,
      id : id,
      correo : correo
    }  
    const usuariosdatos2 = await this.usuarios.update(usuario)
    const usuariosdatos = await this.usuarios.getAll()
      res.render('home', 
        {
        titulo : 'Usuario actualizado',
        usuariosdatos2,
        usuariosdatos
        }
        )
}

  async renderInicioagrega (req, res) {
    const { nombre, correo } = req.body
    const usuario = {
    nombre : nombre,
    correo : correo
    }  
    const guardausuariosdatos = await this.usuarios.create(usuario)
    const usuariosdatos = await this.usuarios.getAll()
        res.render('home', 
        {
          titulo : 'Se Guardo el usuario correctamente',
          usuariosdatos
        }
        )
}

}
module.exports = Cargavistas