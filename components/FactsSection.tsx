import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface FactsSectionProps {
  facts: string[];
}

const FactsSection: FC<FactsSectionProps> = ({ facts }) => (
  <section id="fatos" className="card-menu flex flex-col items-center">
    <h2 className="text-3xl font-display mb-6 flex items-center text-[#a0522d]">
      <BookOpenIcon className="w-8 h-8 mr-2" /> Curiosidades
    </h2>
    <div className="w-full flex flex-col gap-4">
      {facts.map((fact, idx) => (
        <motion.div
          key={idx}
          className="bg-[#f7e7ce] p-4 rounded-xl shadow text-[#6f4e37] font-medium text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          {fact}
        </motion.div>
      ))}
    </div>
  </section>
);

export default FactsSection;

