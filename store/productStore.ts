import { useProductCategoryService } from '~/services/categoryService';
import { useProductDetailsService } from '~/services/productDetailsService';
import { useProducListService } from '~/services/productListService';

export const useProductStore = defineStore('Product', () => {
  const { categories, fetchProductCategories } = useProductCategoryService();
  const {
    products,
    fetchProductList,
    loading: isProductListLoading,
  } = useProducListService();
  const {
    product,
    fetchProductDetails,
    loading: isProductDetailsLoading,
  } = useProductDetailsService();

  return {
    categories,
    products,
    product,
    fetchProductCategories,
    fetchProductList,
    fetchProductDetails,
    isProductListLoading,
    isProductDetailsLoading
  };
});
