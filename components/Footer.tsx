import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-coffee-light text-center py-4">
      <p className="text-sm text-coffee-dark">
        &copy; {new Date().getFullYear()} Servindo Café. Todos os direitos reservados.
      </p>
      <p className="text-sm text-coffee-dark">
        Desenvolvido com ❤️ por [Seu Nome].
      </p>
    </footer>
  );
};

export default Footer;