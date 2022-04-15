const mysql = require('mysql2/promise')


class SqlClient{
constructor(){
this.pool = mysql.createPool({url: process.env.DATABASE_URL})
this.query = this.query.bind(this)
}
async query (sql,params){
const connection = await this.pool.getConnection()
const response = await connection.execute(sql, params)
connection.release()
return response
}


}
module.exports = SqlClient