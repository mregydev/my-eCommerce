export interface Product {
  name: string;
  id: string;
  description: string;
  logo: string;
  image: string;
  price: number;
  seller: string;
  quantity: number;
  rating: number;
}

export interface ProductsListApiResponse {
  products: Product[];
}

export interface ProductsDetailsApiResponse {
  product: Product;
}
