import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white bg-opacity-70 backdrop-blur-md shadow-sm z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between">
        <h1 className="font-display text-2xl">Servindo Café</h1>
        <ul className="flex space-x-6">
          <li><a href="#image" className="hover:text-amber-600">Imagem</a></li>
          <li><a href="#facts" className="hover:text-amber-600">Fatos</a></li>
          <li><a href="#discount" className="hover:text-amber-600">Desconto</a></li>
        </ul>
      </div>
    </nav>
  );
}