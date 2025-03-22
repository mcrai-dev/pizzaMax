import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Pizza, Coffee, IceCream, Filter, Clock, Leaf, Siren as Fire, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Product, Pizza as PizzaType } from '../types';

// Enhanced mock data with more products
const products: Record<string, Product[]> = {
  pizzas: [
    {
      id: '1',
      name: 'Margherita',
      description: 'Tomate, mozzarella, basilic frais',
      price: 10.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait'],
      isAvailable: true,
      preparationTime: '15-20 min',
      spicyLevel: 0,
      isVegetarian: true,
      rating: 4.8
    },
    {
      id: '2',
      name: 'Diavola',
      description: 'Tomate, mozzarella, salami piquant, piments',
      price: 13.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait'],
      isAvailable: true,
      preparationTime: '15-20 min',
      spicyLevel: 2,
      isVegetarian: false,
      rating: 4.6
    },
    {
      id: '3',
      name: 'Quatre Fromages',
      description: 'Tomate, mozzarella, gorgonzola, chèvre, parmesan',
      price: 14.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait'],
      isAvailable: true,
      preparationTime: '20-25 min',
      spicyLevel: 0,
      isVegetarian: true,
      rating: 4.7
    },
    {
      id: '4',
      name: 'Capricciosa',
      description: 'Tomate, mozzarella, jambon, champignons, artichauts, olives',
      price: 15.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait'],
      isAvailable: true,
      preparationTime: '20-25 min',
      spicyLevel: 0,
      isVegetarian: false,
      rating: 4.5
    },
    {
      id: '5',
      name: 'Marinara',
      description: "Tomate, ail, origan, huile d'olive",
      price: 9.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1571066811602-716dc70c3644?auto=format&fit=crop&q=80',
      allergens: ['gluten'],
      isAvailable: true,
      preparationTime: '15-20 min',
      spicyLevel: 0,
      isVegetarian: true,
      rating: 4.3
    },
    {
      id: '6',
      name: 'Calzone',
      description: 'Pizza pliée: tomate, mozzarella, jambon, champignons',
      price: 14.90,
      category: 'pizzas',
      imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait'],
      isAvailable: true,
      preparationTime: '25-30 min',
      spicyLevel: 0,
      isVegetarian: false,
      rating: 4.6
    }
  ],
  drinks: [
    {
      id: '7',
      name: 'Coca-Cola',
      description: '33cl',
      price: 2.50,
      category: 'drinks',
      imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80',
      isAvailable: true
    },
    {
      id: '8',
      name: 'San Pellegrino',
      description: '50cl - Eau gazeuse',
      price: 3.00,
      category: 'drinks',
      imageUrl: 'https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?auto=format&fit=crop&q=80',
      isAvailable: true
    },
    {
      id: '9',
      name: 'Sprite',
      description: '33cl',
      price: 2.50,
      category: 'drinks',
      imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80',
      isAvailable: true
    }
  ],
  desserts: [
    {
      id: '10',
      name: 'Tiramisu',
      description: 'Fait maison',
      price: 5.90,
      category: 'desserts',
      imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait', 'œufs'],
      isAvailable: true
    },
    {
      id: '11',
      name: 'Panna Cotta',
      description: 'Coulis de fruits rouges',
      price: 5.50,
      category: 'desserts',
      imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
      allergens: ['lait'],
      isAvailable: true
    },
    {
      id: '12',
      name: 'Cannoli',
      description: 'Ricotta et pépites de chocolat',
      price: 4.90,
      category: 'desserts',
      imageUrl: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&q=80',
      allergens: ['gluten', 'lait', 'œufs'],
      isAvailable: true
    }
  ]
};

const categoryIcons = {
  pizzas: Pizza,
  drinks: Coffee,
  desserts: IceCream
};

const filters = {
  spicyLevel: [
    { value: 0, label: 'Non épicé' },
    { value: 1, label: 'Légèrement épicé' },
    { value: 2, label: 'Très épicé' }
  ],
  dietary: [
    { value: 'vegetarian', label: 'Végétarien', icon: Leaf },
    { value: 'spicy', label: 'Épicé', icon: Fire },
    { value: 'popular', label: 'Populaire', icon: Star }
  ]
};

function Menu() {
  const { category = 'pizzas' } = useParams();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, selectedLocation } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');
  
  const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || Pizza;

  useEffect(() => {
    setSelectedFilters([]);
    setSelectedProduct(null);
    setQuantity(1);
    setSpecialInstructions('');
  }, [category]);

  const filteredProducts = products[category]?.filter(product => {
    if (selectedFilters.length === 0) return true;
    if (product.category === 'pizzas') {
      const pizza = product as PizzaType;
      return selectedFilters.every(filter => {
        switch (filter) {
          case 'vegetarian':
            return pizza.isVegetarian;
          case 'spicy':
            return pizza.spicyLevel > 0;
          case 'popular':
            return (pizza as any).rating >= 4.5;
          default:
            return true;
        }
      });
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    return ((b as any).rating || 0) - ((a as any).rating || 0);
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      product,
      quantity,
      notes: specialInstructions.trim()
    });
    setSelectedProduct(null);
    setQuantity(1);
    setSpecialInstructions('');
  };

  if (!selectedLocation) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 mb-4">Veuillez sélectionner une zone de livraison</p>
        <button
          onClick={() => navigate('/locations')}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
        >
          Choisir une zone
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Navigation and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-4">
          <CategoryIcon className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold capitalize">{category}</h1>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {category === 'pizzas' && (
            <div className="flex flex-wrap gap-2">
              {filters.dietary.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilters(prev => 
                    prev.includes(filter.value)
                      ? prev.filter(f => f !== filter.value)
                      : [...prev, filter.value]
                  )}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    selectedFilters.includes(filter.value)
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </button>
              ))}
            </div>
          )}
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white"
          >
            <option value="rating">Les mieux notés</option>
            <option value="price">Prix croissant</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {(product as any).rating >= 4.5 && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    {(product as any).rating}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  {product.category === 'pizzas' && (product as PizzaType).spicyLevel > 0 && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm flex items-center gap-1">
                      <Fire className="h-4 w-4" />
                      Épicé
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {product.category === 'pizzas' && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{(product as PizzaType).preparationTime}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">{product.price.toFixed(2)}€</span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-md w-full p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              {(selectedProduct as any).rating && (
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">{(selectedProduct as any).rating}</span>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-full"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructions spéciales
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                rows={3}
                placeholder="Ex: Sans oignons, bien cuite..."
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Ajouter au panier - {(selectedProduct.price * quantity).toFixed(2)}€
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Menu;