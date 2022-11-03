import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema (
    {
        nameuser: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            unique: true
        },
    }
);
export default mongoose.model( "user", usuarioSchema);
