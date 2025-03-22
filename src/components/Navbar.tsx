import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, ShoppingCart, User, MapPin } from 'lucide-react';
import { useStore } from '../store/useStore';

function Navbar() {
  const { cart, selectedLocation } = useStore();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Pizza className="h-8 w-8" />
            <span className="text-xl font-bold">PizzaMax</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/locations" className="flex items-center space-x-1 hover:text-red-200">
              <MapPin className="h-5 w-5" />
              <span>{selectedLocation?.name || 'Select Location'}</span>
            </Link>

            <Link to="/cart" className="relative hover:text-red-200">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link to="/account" className="hover:text-red-200">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;