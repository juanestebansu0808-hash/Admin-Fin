const express = require ("express")
const app = express()
const puerto = 3000

app.get('/',(require,response)=>{
response.send("hola claase de programacion2")
})

app.listen(puerto,()=>{

   console.log("este es mi servidor que corre en el puerto "+"" "+puerto);
    
})