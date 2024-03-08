type Props = {
  livro: {
    titulo: string;
    editora: string;
    preco: number;
    paginas: number;
    autor: {
      nome: string;
      nacionalidade: string;
    };
  };
};

export default function Livro({ livro }: Props) {
  return (
    <div>
      <img src="" alt="" />
      <h1>{livro.titulo}</h1>
      <h3>{livro.preco}</h3>
      <h3>{livro.editora}</h3>
      <h3>{livro.paginas}</h3>
      <h3>{livro.autor.nome}</h3>
      <h3>{livro.autor.nacionalidade}</h3>
    </div>
  );
}
