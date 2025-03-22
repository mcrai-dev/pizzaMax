export interface Location {
  id: string;
  name: string;
  zipCode: string;
  minimumOrder: number;
  deliveryFee: number;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  allergens?: string[];
  isAvailable: boolean;
  rating?: number;
}

export interface Pizza extends Product {
  preparationTime: string;
  spicyLevel: number;
  isVegetarian?: boolean;
  allergens: string[];
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  address: string;
  phone: string;
  loyaltyPoints: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'completed';
  deliveryAddress: string;
  deliveryTime: Date;
  paymentMethod: 'card' | 'cash';
  locationId: string;
}