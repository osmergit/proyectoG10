import mongoose from 'mongoose';

const c_uri= 'mongodb+srv://osmereduardo:Colombia2022@cluster0.dnx9hq7.mongodb.net/dbeventos?retryWrites=true&w=majority';

try {
    const db = await mongoose.connect(c_uri);
    console.log("Se a conectado con exito a: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
  