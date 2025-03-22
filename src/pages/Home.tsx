import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Coffee, IceCream } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const heroImages = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80', // Classic pizza
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80', // Margherita
  'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80', // Pizza preparation
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80', // Wood fired oven
  'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80'  // Fresh ingredients
];

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${image}")` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Authentic Italian Pizza
                    </h1>
                    <p className="text-xl mb-8">
                      Made with love, delivered to your door
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link
                        to="/menu/pizzas"
                        className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
                      >
                        Order Now
                      </Link>
                      <Link
                        to="/locations"
                        className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Delivery Areas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Pizza,
            title: 'Pizzas',
            description: 'From classics to gourmet specialties',
            link: '/menu/pizzas'
          },
          {
            icon: Coffee,
            title: 'Drinks',
            description: 'Refreshing selection of beverages',
            link: '/menu/drinks'
          },
          {
            icon: IceCream,
            title: 'Desserts',
            description: 'Sweet treats to complete your meal',
            link: '/menu/desserts'
          }
        ].map((category) => (
          <Link
            key={category.title}
            to={category.link}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <category.icon className="h-12 w-12 text-red-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </section>

      {/* Special Offers */}
      <section className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Student Special
            </h3>
            <p className="text-gray-700 mb-4">
              20% off on all orders with valid student ID
            </p>
            <Link
              to="/menu/pizzas"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Order Now →
            </Link>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Family Deal
            </h3>
            <p className="text-gray-700 mb-4">
              2 Large Pizzas + 2 Drinks + Dessert for 35€
            </p>
            <Link
              to="/menu/pizzas"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Order Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;