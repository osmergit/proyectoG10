import express from "express";
export const router = express.Router();
import { MONGODB_URI } from '../db.js'
//app.use(router);
try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to ", db.connection.name);
  } catch (error) {
    console.error(error);
  } 
    router.get('/', (req,res) => {  
    res.send('☺Bienvenidos a NodeJs desde la Raiz');
    console.log("Connected to ", db.connection.name);
    })
    
    router.get('/login',(req,res)=>{
        res.send('Bienvenidos a Mi módulo de Login😎');
    })
    
    router.post('/agregar',(req,res) => {
        res.send('😉Archivo grabado con exito');
    })
    
    router.delete('/delete',(req,res) => {
        res.send('Archivo eliminado con exito🏍');
    })

    export default router;
    