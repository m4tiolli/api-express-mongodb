type Props = {
  livro: {
    imagem: string;
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

export default function Livro({ livro }: Readonly<Props>) {
  return (
    <div className="bg-zinc-600 text-zinc-50 m-auto w-60 p-1 h-80 flex items-center text-center justify-center flex-col shadow-md rounded-xl">
      <img className="h-40 w-auto rounded-md" src={livro.imagem} alt="" />
      <h1 className="font-bold text-xl">{livro.titulo}</h1>
      <h3 className="font-medium">{livro.preco}</h3>
      <h3>{livro.editora}</h3>
      <h3>{livro.paginas}</h3>
      <h3>{livro.autor.nome}</h3>
    </div>
  );
}
