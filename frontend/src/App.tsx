import { useState } from "react";
import axios from "axios";

interface Livro {
  titulo: string;
}

function App() {
  const [livros, setLivros] = useState([]);
  axios
    .get("http://localhost:3000/livros")
    .then((response) => setLivros(response.data));

  return (
    <>
      {livros.map((livro: Livro, index) => (
        <div key={index}>
          <p>{livro.titulo}</p>
        </div>
      ))}
    </>
  );
}

export default App;
