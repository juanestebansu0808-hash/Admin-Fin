const express = require("express")
const router = express.Router()
const controlador = require("../controller/gastos.controller")

router.get("/gastos", controlador.ObtenerGastos)
router.get("/registros",controlador.obtenerRegistros)

module.exports = router