import type { ProductsListApiResponse } from '~/dtos/Product';

export const useProducListService = () => {
  const { data, fetchData, loading } = useFetch<ProductsListApiResponse>();

  const fetchProductList = async (categoryId=0) => {
    const queryParams=categoryId?`?categoryId=${categoryId}`:""
    
    await fetchData({ url: `/api/products${queryParams}` });
  };

  const products = computed(() => {
    return data.value?.products;
  });

  return {
    products,
    loading,
    fetchProductList,
  };
};
