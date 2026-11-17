const express = require("express")
const router = express.Router()
const controlador = require("../controller/gastos.controller")

router.get("/gastos", controlador.ObtenerGastos)

module.exports = router