import express from 'express';
import { regusuario, showuser, shuserone, deluser, upuser  } from '../controllers/userscontroller.js';
import { regevento, sheventos, shevent, delevent, upevent } from '../controllers/ceventocontrollers.js';
import { login } from '../controllers/logincontrollers.js';
import {db} from '../mongodb.js';

export const router = express.Router();

//Rutas para Mis eventos deportivos

router.post('/regevento', regevento );
router.get('/shevents', sheventos);
router.get('/shevents/:id', shevent);
router.delete('/delevent/:id', delevent);
router.put('/upevent/:id', upevent);

//rutas collection usuarios
router.post('/reguser', regusuario);
router.get('/shuser', showuser);
router.get('/shuser/:id', shuserone);
router.delete('/shuser/:id',deluser);
router.put('/upuser/:id', upuser);
router.post('/login', login);


export default router;