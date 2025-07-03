import { FC } from 'react';
import { GiftIcon } from '@heroicons/react/24/outline';

interface DiscountSectionProps {
  code: string;
}

const DiscountSection: FC<DiscountSectionProps> = ({ code }) => (
  <section id="discount" className="min-h-screen flex flex-col items-center bg-amber-50 py-16">
    <h2 className="text-3xl md:text-4xl font-display mb-4 flex items-center">
      <GiftIcon className="w-8 h-8 mr-2" />Seu Código de Desconto
    </h2>
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <p className="text-xl">Use o código abaixo na sua reserva de café:</p>
      <div className="mt-4 text-3xl font-mono text-amber-700">{code}</div>
    </div>
  </section>
);

export default DiscountSection;