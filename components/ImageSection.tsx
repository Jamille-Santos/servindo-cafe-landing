import { FC } from 'react';
import { motion } from 'framer-motion';

interface ImageSectionProps {
  imageUrl: string;
}

const ImageSection: FC<ImageSectionProps> = ({ imageUrl }) => (
  <section id="image" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-amber-50">
    <h2 className="text-3xl md:text-4xl font-display mb-4">Imagem Aleatória de Café</h2>
    <motion.img 
      src={imageUrl} 
      alt="Imagem aleatória de um café" 
      className="w-80 h-80 object-cover rounded-xl shadow-lg"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    />
    <p className="mt-4 max-w-md text-center">Cada vez que você visita, uma nova imagem de café aparece!</p>
  </section>
);

export default ImageSection;