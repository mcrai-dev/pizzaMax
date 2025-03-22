import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Info, ChevronRight } from 'lucide-react';
import type { Pizza } from '../types';

interface PizzaCardProps {
  pizza: Pizza;
  onSelect: (pizza: Pizza) => void;
}

export function PizzaCard({ pizza, onSelect }: PizzaCardProps) {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {pizza.spicyLevel > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            Épicé
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{pizza.name}</h3>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            aria-label="Plus d'informations"
          >
            <Info className="h-5 w-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-3">{pizza.description}</p>

        {showInfo && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>Préparation: {pizza.preparationTime}</span>
            </div>
            {pizza.allergens && (
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-gray-500" />
                <span>Allergènes: {pizza.allergens.join(', ')}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">{pizza.price}€</span>
          <button
            onClick={() => onSelect(pizza)}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            Commander
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}