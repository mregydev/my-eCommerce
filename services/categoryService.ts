import type { ProductCategoryResponse } from "~/dtos/ProductCategory";

export const useProductCategoryService = () => {
  const { data, fetchData } = useFetch<ProductCategoryResponse>();

  const fetchProductCategories = async (query: string) => {
    await fetchData({ url: `/api/categories?query=${query}` });
  };

  const categories=computed(()=>data.value?.categories)

  return {
    categories,
    fetchProductCategories,
  };
};
