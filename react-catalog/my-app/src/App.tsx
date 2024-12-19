import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { About } from './About';
import { Catalog } from './Catalog';
import { ProductDetails } from './ProductDetails';
import { NotFound } from './NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:itemId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
