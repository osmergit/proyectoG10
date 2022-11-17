import { usuario } from '../models/usuario.js';
import * as bcrypt from 'bcrypt';

// Registrar un usuario en la abse de datos
export const regusuario = (req, res) => {
    const user = usuario(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  // Mostrar información de los usuarios

  export const showuser = (req,res) => {
 
    usuario
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}

//Muestra la información de un usuario especifico

export const shuserone = (req, res) => {
    const { id } = req.params;
    usuario
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  //Borramos un usuario

  export const deluser =  (req, res) => {
    const { id } = req.params;
    usuario
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

   //Actualizar un usuario
/*  export const upuser =  (req, res) => {
    const hashPass = async(password) => {
        const salt = await bcrypt.genSaltSync(12);
        password = await bcrypt.hashSync(password, salt);
        return password;
  }
  if (req.body.password) {
    req.body.password = hashPass(req.body.password);
  }
 const { nomuser , password, correo } = req.body;
  const { id } = req.params;
  console.log("e Valor del codigo es:",id)
  //const user =  usuario.findOneAndUpdate( req.params.id , { $set: req.body  }, {new: true})
  const user = usuario.findOneAndUpdate({_id: id } , { $set: { nomuser, password, correo } }, {new: true});
   //function(err, doc) {
  //  if(err) {return console.log(err);}
   // else {return res.send(doc);}
//});

  
  //const user =  usuario.updateOne({ _id }, { $set: { nomuser, password, correo } })
  //.then((data) => res.json(data))
  //.catch((error) => res.json({ message: error }))
  
  if (!user) return res.status(404).send("Un Error ocurrio mientras se actualizaba el usuario")
  res.status(200).send("Usuario Actualizado con Exito")
  };*/

  //Actualizar un usuario
 export const upuser =  (req, res) => {
    const { id } = req.params;
    const { nomuser , password, correo } = req.body;
    
      usuario
      .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


  export default regusuario;