const database = require("../db/conexion_db")

class GastosModel{

static async ObtenerGastos(){
const [resultado] = await database.query("SELECT * FROM categorias")

console.log (resultado)
return resultado

}  
}

module.exports = GastosModel