class Cargavistas {


renderInicio (req, res) {
    res.render('home', 
    {titulo : 'Prueba',
    inputnombre : '',
    inputcorreo : '<input type="text" placeholder="correo" class="form-control" id="correo">',
    }
    )
  }

  renderSc (req, res) {
    res.render('funciones.js'
    )
  }

  

}
module.exports = Cargavistas