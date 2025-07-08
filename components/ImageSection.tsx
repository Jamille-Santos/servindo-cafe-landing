import React from 'react';

interface ImageSectionProps {
  imageUrl: string | null;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl }) => {
  if (!imageUrl) return null;
  return (
    <section id="imagem" className="card-menu flex flex-col items-center mb-8">
      <img
        src={imageUrl}
        alt="Café aleatório"
        className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover mb-4"
        style={{ aspectRatio: '4/3' }}
      />
      <p className="text-center text-[#6f4e37] text-lg font-semibold mt-2">
        O café tem origem na Etiópia e conquistou o mundo com seu aroma e sabor únicos.<br />
        <span className="italic text-[#a0522d]">Experimente um gole de história a cada xícara!</span>
      </p>
    </section>
  );
};

export default ImageSection;