import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Livro from "./components/Livro";

interface Livro {
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
    <>
      <Header />
      <main className="w-full h-dvh flex items-center justify-center flex-col">
        {livros.map((livro: Livro, index) => (
          <Livro key={index} livro={livro} />
        ))}
      </main>
    </>
  );
}

export default App;
