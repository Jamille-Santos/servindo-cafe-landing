import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface FactsSectionProps {
  facts: string[];
}

const FactsSection: FC<FactsSectionProps> = ({ facts }) => (
  <section id="facts" className="min-h-screen flex flex-col items-center bg-yellow-50 py-16">
    <h2 className="text-3xl md:text-4xl font-display mb-4 flex items-center">
      <BookOpenIcon className="w-8 h-8 mr-2" />Curiosidades sobre Café
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {facts.map((fact, idx) => (
        <motion.div 
          key={idx} 
          className="bg-white p-6 rounded-xl shadow transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <p>{fact}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FactsSection;