import products from '../../../data/products.json';

export default defineEventHandler((event) => {
  
  return {
    product:products.find(product=>product.id.toString()===event.context.params?.id)
  };
});
