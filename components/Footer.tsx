import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full text-center py-6 mt-8 text-[#6f4e37] bg-[#f7e7ce] rounded-t-3xl shadow-inner">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Projeto Servindo Café. Todos os direitos reservados.
      </p>
      <p className="text-sm">
        Desenvolvido por Jamille Santos.
      </p>
    </footer>
  );
};

export default Footer;