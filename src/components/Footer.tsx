import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>02 32 51 XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@pizzamax.fr</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Mon-Sat: 11:00 - 23:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Sun: 11:00 - 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Delivery Areas</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Vernon (27200)</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Gasny (27620)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-red-400">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-red-400">Privacy Policy</a></li>
              <li><a href="/mentions" className="hover:text-red-400">Legal Notice</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} PizzaMax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;