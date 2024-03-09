import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    imagem: { type: String },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: { type: autorSchema, required: true }
  },
  { versionKey: false }
);

const Livro = mongoose.model("livros", livroSchema);

export default Livro;
