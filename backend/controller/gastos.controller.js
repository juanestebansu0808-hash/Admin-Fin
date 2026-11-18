const modelo = require("../models/gastos.model")

class GastosController {

    static async ObtenerGastos(req, res) {
        const gastos = await modelo.ObtenerGastos()
        return res.json(gastos)
    }

    static async obtenerRegistros(req, res) {
        const registros = await modelo.ObtenerRegistros() 
        return res.json(registros)
    }
}

module.exports = GastosController
