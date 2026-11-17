const modelo = require("../models/gastos.model")

class GastosController{

    static async ObtenerGastos(req,res){

const datos = await modelo.ObtenerGastos()
return res.json(
    datos
)

    }
}

module.exports = GastosController