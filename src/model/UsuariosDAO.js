class UsuariosDAO{

    constructor (dbClient){
        this.db = dbClient
        //this.Usuariosdao = new UsuariosDAO(dbClient)
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.Delete.bind(this)
    }

    async getAll () {
        const response = await this.db.query('SELECT id, nombre, correo FROM Usuarios')    
        const rows = response[0]
        return response[0]
    }

    async getById (id) {
        const response = await this.db.query('SELECT id, nombre, correo FROM Usuarios WHERE id = ?', [id])    
        const rows = response[0]
        return response[0]
    }

    async create(usuario) {      
        const nombre = usuario.nombre
        const correo = usuario.correo
        const response = await this.db.query('INSERT INTO Usuarios (nombre, correo) VALUES ( ?, ? )', [nombre, correo])  
        const row = response[0]
        return response[0]
    }

    async update(usuario) {
        const id = ParseInt(usuario.id)
        const correo = usuario.correo
        const nombre = usuario.nombre
        console.log (usuario)
        const response = await this.db.query('UPDATE Usuarios SET nombre=?, correo=? WHERE id=?',[nombre, correo, id])
        const row = response[0]
        return response[0]
    }

    async Delete (id) {
        console.log(id," <-----ID")
        const id2 = parseInt(id)
        const response = await this.db.query('DELETE FROM Usuarios WHERE id = ?', [id2])    
        const rows = response[0]
        return response[0]
    }

}
module.exports = UsuariosDAO