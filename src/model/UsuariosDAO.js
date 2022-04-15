class UsuariosDAO{

    constructor (dbClient){
        this.db = dbClient
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)




    }
    async getAll () {

        const response = await this.db.query('SELECT id, nombre, correo FROM Usuarios')    
        const rows = response[0]
        return response[0]
    }

    async getById (id) {
        const response = await this.db.query('SELECT id, nombre, correo FROM Usuarios WHERE id = ?', {id})    
        const rows = response[0]
        return response[0][0]
    }

    async create(usuario) {      
    const response = await this.db.query('INSERT INTO Usuarios (nombre, correo) VALUES (?,?)', {usuario, usuario})  
    const row = response[0]
    return response[0].InsertId
    }

    async update(usuario) {}

    async  delete(id){}



}
module.exports = UsuariosDAO