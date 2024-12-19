import { useEffect, useState } from 'react';
import { type Product, readProduct } from '../lib';
import { useParams, Link } from 'react-router-dom';
import { toDollars } from '../lib';
export function ProductDetails() {
  const { itemId } = useParams();
  const [item, setItem] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readProduct(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(itemId);
    if (itemId && !isNaN(Number(itemId))) {
      setIsLoading(true);
      loadItem(Number(itemId));
    } else {
      setError(new Error('Invalid item ID'));
      setIsLoading(false);
    }
  }, [itemId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, imageUrl, shortDescription, longDescription, price } = item;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Catalog
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
            <h4>{toDollars(price)}</h4>
          </div>

          <div className="px-4">
            <p className="whitespace-pre-wrap">{shortDescription}</p>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
