import { type Product, readCatalog } from '../lib';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [productList, setProductList] = useState<Product[]>([]); // Renamed state variable
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setProductList(values); // Updated state variable
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {productList.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  // Added `product` prop
  return (
    <Link
      to={`/details/${product.productId}`} // Corrected access to `productId`
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">{product.name}</h5>
      </div>
    </Link>
  );
}
