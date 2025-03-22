import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Coffee, IceCream, Sandwich, Salad, Siren as Fire, Star, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const pizzaCategories = [
  {
    name: "Pizzas Classiques",
    items: [
      {
        name: "Margherita",
        description: "Sauce tomate, mozzarella, basilic frais",
        price: "10.90€",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
      },
      {
        name: "Reine",
        description: "Sauce tomate, mozzarella, jambon, champignons",
        price: "12.90€",
        image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80",
      },
      {
        name: "Quatre Fromages",
        description: "Sauce tomate, mozzarella, gorgonzola, chèvre, parmesan",
        price: "13.90€",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
      }
    ]
  },
  {
    name: "Pizzas Spéciales",
    items: [
      {
        name: "Fruits de Mer",
        description: "Sauce tomate, fruits de mer, ail, persil",
        price: "15.90€",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
      },
      {
        name: "Végétarienne",
        description: "Sauce tomate, légumes de saison grillés, mozzarella",
        price: "13.90€",
        image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&q=80",
      }
    ]
  },
  {
    name: "Pizzas Épicées",
    items: [
      {
        name: "Diavola",
        description: "Sauce tomate, mozzarella, salami piquant, piments",
        price: "14.90€",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
      }
    ]
  }
];

const otherCategories = [
  {
    icon: Sandwich,
    title: 'Paninis',
    description: 'Sandwichs chauds italiens',
    link: '/menu/paninis'
  },
  {
    icon: Salad,
    title: 'Salades',
    description: 'Fraîches et croquantes',
    link: '/menu/salads'
  },
  {
    icon: Coffee,
    title: 'Boissons',
    description: 'Rafraîchissantes',
    link: '/menu/drinks'
  },
  {
    icon: IceCream,
    title: 'Desserts',
    description: 'Douceurs italiennes',
    link: '/menu/desserts'
  }
];

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white p-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              La Meilleure Pizza Italienne
            </h1>
            <p className="text-xl mb-8">
              Faite avec amour, livrée chez vous
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/menu/pizzas"
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Commander
              </Link>
              <Link
                to="/locations"
                className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Zones de Livraison
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Features */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Star, text: "Meilleurs Prix", color: "bg-yellow-100" },
          { icon: Clock, text: "Livraison Rapide", color: "bg-blue-100" },
          { icon: Pizza, text: "Fait Maison", color: "bg-green-100" },
          { icon: Fire, text: "Four à Bois", color: "bg-red-100" }
        ].map((feature, index) => (
          <div key={index} className={`${feature.color} p-4 rounded-lg flex items-center gap-3`}>
            <feature.icon className="h-6 w-6" />
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </section>

      {/* Pizza Categories */}
      {pizzaCategories.map((category, index) => (
        <section key={index} className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.items.map((pizza, pizzaIndex) => (
              <div key={pizzaIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                  <p className="text-gray-600 mb-3">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">{pizza.price}</span>
                    <Link
                      to="/menu/pizzas"
                      className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Other Categories */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {otherCategories.map((category) => (
          <Link
            key={category.title}
            to={category.link}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <category.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </section>

      {/* Special Offers */}
      <section className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Offres Spéciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Menu Étudiant
            </h3>
            <p className="text-gray-700 mb-4">
              -20% sur présentation de la carte étudiante
            </p>
            <Link
              to="/menu/pizzas"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Commander →
            </Link>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Menu Famille
            </h3>
            <p className="text-gray-700 mb-4">
              2 Grandes Pizzas + 2 Boissons + 1 Dessert pour 35€
            </p>
            <Link
              to="/menu/pizzas"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Commander →
            </Link>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Happy Hour
            </h3>
            <p className="text-gray-700 mb-4">
              -15% sur toutes les pizzas de 14h à 17h
            </p>
            <Link
              to="/menu/pizzas"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Commander →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;