import React from 'react';

interface DiscountSectionProps {
  code: string | null;
}

const DiscountSection: React.FC<DiscountSectionProps> = ({ code }) => {
  if (!code) return null;
  return (
    <section id="desconto" className="card-menu flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 text-[#a0522d]">Oferta do Dia!</h2>
      <div className="bg-yellow-100 px-6 py-3 rounded-lg text-lg font-mono mb-2 flex flex-col items-center">
        <span className="text-[2rem] font-extrabold text-[#b87333] tracking-widest drop-shadow">
          {code}
        </span>
      </div>
      <p className="text-sm text-gray-500 italic">
        *Este cupom é fictício😉
      </p>
    </section>
  );
};

export default DiscountSection;