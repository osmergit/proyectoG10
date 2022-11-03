import mongoose from "mongoose";

export const MONGODB_URI = 'mongodb+srv://osmereduardo:Colombia2022@cluster0.dnx9hq7.mongodb.net/dbeventos?retryWrites=true&w=majority'

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Connected to ", db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
  });

  export default MONGODB_URI;