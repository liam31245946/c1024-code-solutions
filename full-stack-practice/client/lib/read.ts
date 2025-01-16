export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch catalog');
  }

  const data = (await response.json()) as Product[];
  return data;
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    if (response.status === 404) {
      return undefined;
    }
    throw new Error('Failed to fetch product');
  }
  return response.json();
}
