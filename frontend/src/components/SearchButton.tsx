import { IoFilter, IoSearch } from "react-icons/io5";

export default function SearchButton() {
  return (
    <div className="bg-zinc-600 w-1/3 mx-auto py-4 px-2 h-10 flex justify-between items-center rounded-lg shadow-xl text-zinc-50 mt-10">
      <IoFilter className="cursor-pointer text-2xl" />
      <input
        type="text"
        className="bg-transparent outline-none w-4/5"
        placeholder="Pesquisar livro..."
      />
      <IoSearch className="cursor-pointer text-2xl" />
    </div>
  );
}
