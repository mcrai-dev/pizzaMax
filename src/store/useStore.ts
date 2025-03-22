import { create } from 'zustand';
import { CartItem, Location, User } from '../types';

interface StoreState {
  selectedLocation: Location | null;
  cart: CartItem[];
  user: User | null;
  setLocation: (location: Location) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setUser: (user: User | null) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedLocation: null,
  cart: [],
  user: null,

  setLocation: (location) => set({ selectedLocation: location }),
  
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (existingItem) {
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
      };
    }

    return { cart: [...state.cart, item] };
  }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    })),

  setUser: (user) => set({ user }),
  
  clearCart: () => set({ cart: [] }),
}));