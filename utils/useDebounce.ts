// We can use vueuse one but prefered custom implm entation just for practise 

export function useDebounce(func: Function, timeout: number) {
  const timer = ref(null);

  const debounceFn = (...args: unknown[]) => {
    if (timer?.value) {
      clearTimeout(timer.value);
    }

    setTimeout(() => {
      func(...args);
    }, timeout);
  };

  return {
    debounceFn,
  };
}
