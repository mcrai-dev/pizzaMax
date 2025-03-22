import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Location } from '../types';

const locations: Location[] = [
  {
    id: '1',
    name: 'Vernon',
    zipCode: '27200',
    minimumOrder: 15,
    deliveryFee: 3,
    isActive: true
  },
  {
    id: '2',
    name: 'Gasny',
    zipCode: '27620',
    minimumOrder: 20,
    deliveryFee: 4,
    isActive: true
  },
  // Add more locations as needed
];

function LocationSelector() {
  const navigate = useNavigate();
  const setLocation = useStore((state) => state.setLocation);

  const handleLocationSelect = (location: Location) => {
    setLocation(location);
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your Location</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => handleLocationSelect(location)}
            className={`p-6 rounded-lg border-2 hover:border-red-500 transition-colors ${
              location.isActive ? 'bg-white' : 'bg-gray-100'
            }`}
            disabled={!location.isActive}
          >
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <h2 className="text-xl font-semibold">{location.name}</h2>
                <p className="text-gray-600">{location.zipCode}</p>
                <div className="mt-2 text-sm">
                  <p>Minimum order: {location.minimumOrder}€</p>
                  <p>Delivery fee: {location.deliveryFee}€</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>We're constantly expanding! More locations coming soon.</p>
      </div>
    </div>
  );
}

export default LocationSelector;