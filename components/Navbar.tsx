import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#c7a17a] shadow-lg py-4 rounded-b-3xl mb-4">
      <div className="flex flex-col items-center w-full px-4">
        {/* Título */}
        <h1 className="font-display text-4xl text-[#6f4e37] mb-2 tracking-widest drop-shadow">
          Servindo Café
        </h1>

        {/* Botão Hambúrguer */}
        <div className="md:hidden self-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col space-y-1 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-[#6f4e37]"></span>
            <span className="block w-6 h-0.5 bg-[#6f4e37]"></span>
            <span className="block w-6 h-0.5 bg-[#6f4e37]"></span>
          </button>
        </div>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row justify-center items-center gap-6 mt-3 w-full max-w-xl
          ${menuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <li>
            <a
              href="#imagem"
              className="text-[#6f4e37] font-display text-lg font-bold hover:text-[#a0522d] transition no-underline px-2"
            >
              Imagem
            </a>
          </li>
          <li>
            <a
              href="#fatos"
              className="text-[#6f4e37] font-display text-lg font-bold hover:text-[#a0522d] transition no-underline px-2"
            >
              Fatos
            </a>
          </li>
          <li>
            <a
              href="#desconto"
              className="text-[#6f4e37] font-display text-lg font-bold hover:text-[#a0522d] transition no-underline px-2"
            >
              Desconto
            </a>
          </li>
          <li>
            <Link
              href="https://pt.wikipedia.org/wiki/Café"
              target="_blank"
              className="text-[#a0522d] font-display text-lg font-bold hover:text-[#6f4e37] transition no-underline px-2"
            >
              Sobre o Café
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
