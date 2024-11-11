import { ref } from 'vue';
import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchParams {
  url: string;
  options?: AxiosRequestConfig;
}

// prefered to have custom implementation for practise instead of using third party
export function useFetch<T>() {
  const data = ref<T>();
  const error = ref();
  const loading = ref(false);

  const fetchData = async ({ url, options }: FetchParams) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios<T>(url, options);
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    fetchData,
  };
}
