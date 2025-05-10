import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartValue, Product } from './components/CartContext';
import { useState } from 'react';
import { CartContext } from './components/CartContext';

export function App() {
  const [cart, setCart] = useState<Product[]>([]); // Initialize state with an empty array

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartContextValues: CartValue = {
    cart, // Use the state variable `cart`
    addToCart, // Use the function `addToCart`
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
