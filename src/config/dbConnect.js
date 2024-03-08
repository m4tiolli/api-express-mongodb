import mongoose from "mongoose";

async function connect() {
  mongoose.connect("mongodb+srv://matiolli:01100111gA@livraria.1tmzt8p.mongodb.net/?retryWrites=true&w=majority&appName=Livraria");

  return mongoose.connection;
}

export default connect;
