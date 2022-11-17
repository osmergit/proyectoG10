import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema(
    {
        nomuser: {
            type: String,
            require: true
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
            emailVerified: {
            type: Boolean,
            default: false,
            }
      

    },
    {
        timestamps: true,
        versionKey: false,
   }
);
/*
userSchema.pre('updateOne', function(next) {
    const user1 = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user1.password = hash;
    next()
    });
*/

// Aca implementamos el Hash
userSchema.pre('save', function(next) {
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next()
    });





export const usuario = mongoose.model('users', userSchema);
export default usuario;