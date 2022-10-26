import express from "express";
import cors from 'cors'



const app = express()
app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    res.send('HOLA MUNDO DESDE DOCKER')
}) 

app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})