import products from '../../data/products.json';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const categoryId = query.categoryId?.toString().toLowerCase();

  const filteredProducts = categoryId
    ? products.filter((p) => p.category === categoryId)
    : products;

  return {
    products: filteredProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      rating:product.rating,
      quantity:product.quantity
    })),
  };
});
