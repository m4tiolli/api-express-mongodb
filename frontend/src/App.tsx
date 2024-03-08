import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Livro from "./components/Livro";

interface Livro {
  imagem: string;
  titulo: string;
  editora: string;
  preco: number;
  paginas: number;
  autor: {
    nome: string;
    nacionalidade: string;
  };
}

function App() {
  const [livros, setLivros] = useState([]);
  axios
    .get("http://localhost:3000/livros")
    .then((response) => setLivros(response.data));

  return (
    <div className="flex items-center w-full flex-col relative">
      <Header />
      <main className="mt-10 w-3/5 h-fit grid grid-cols-3 gap-4">
        {livros.map((livro: Livro, index) => (
          <Livro key={index} livro={livro} />
        ))}
      </main>
    </div>
  );
}

export default App;
