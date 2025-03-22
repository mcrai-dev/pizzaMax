import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LocationSelector from './pages/LocationSelector';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Account from './pages/Account';
import { useStore } from './store/useStore';

function App() {
  const selectedLocation = useStore((state) => state.selectedLocation);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={selectedLocation ? <Home /> : <LocationSelector />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/locations" element={<LocationSelector />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;