import { Route, Routes } from 'react-router-dom';
import { About } from './About';
import { Catalog } from './Catalog';
import { NotFound } from './NotFound';
import { ProductDetails } from './ProductDetails';
import { Header } from './Header';
import './App.css';
import './index.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
