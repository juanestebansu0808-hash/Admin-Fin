const express = require("express")
const router = require("./routes/router")
const app = express()
let port = 4000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API de Admin-Fin funcionando correctamente");
})

app.use("/api",router)

app.listen(port, ()=>{
console.log(`corriendo en el ${port}`)
})
