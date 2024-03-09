import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Livro from "./components/Livro";
import BackgroundAnimation from "./assets/Background";
import SearchButton from "./components/SearchButton";

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
    <div className="flex items-center w-full flex-col relative bg-[#090d00]">
      <BackgroundAnimation />
      <main className="z-10 w-full min-h-fit">
        <Header />
        <SearchButton />
        <div className="mt-10 mx-auto w-4/5 h-fit grid grid-cols-3 gap-y-10">
          {livros.map((livro: Livro, index) => (
            <Livro key={index} livro={livro} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
