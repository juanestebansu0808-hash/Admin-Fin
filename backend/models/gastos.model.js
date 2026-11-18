const database = require("../db/conexion_db")

class GastosModel{

static async ObtenerGastos(){
const [resultado] = await database.query("SELECT * FROM registros")

console.log (resultado)
return resultado

}  

static async ObtenerRegistros() {
        const [resultado] = await database.query("SELECT * FROM categorias");
        return resultado;
    }
}

module.exports = GastosModel