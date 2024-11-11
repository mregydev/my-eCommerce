import type { ProductsDetailsApiResponse } from '~/dtos/Product';

export const useProductDetailsService = () => {
  const { data, fetchData, loading } = useFetch<ProductsDetailsApiResponse>();

  const fetchProductDetails = async (productId:number) => {
    
    await fetchData({ url: `/api/product/${productId}` });
  };

  const product = computed(() => {
    return data.value?.product;
  });

  return {
    product,
    loading,
    fetchProductDetails,
  };
};
