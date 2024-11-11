<template>
  <VAutocomplete v-model="selectedItem"   :items="categoryItems" item-text="title" item-value="id" class="mx-auto" density="comfortable" menu-icon=""
    placeholder="Search by Category.." prepend-inner-icon="mdi-magnify"  theme="light"
    variant="solo" hide-no-data auto-select-first no-data-text=false @update:model-value="onItemClick"  @keyup="onKeyUp"
    @keyup.enter="onItemClick" @change="onItemClick"></VAutocomplete>
</template>
<script lang="ts" setup>

import { useProductStore } from '~/store/productStore';

const selectedItem=ref()
const store = useProductStore();
const { fetchProductCategories } = store
const { categories } = storeToRefs(store)

const router = useRouter();

const { debounceFn: onKeyUp } = useDebounce(
  async (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    await fetchProductCategories(value)
  }, 300);



const categoryItems = computed(() => categories.value?.map(category => ({ title: category.name , id:category.id})))
watch(router.currentRoute.value,()=>{
  selectedItem.value=""
})
const onItemClick = () => {
  const id =selectedItem.value
  if (id) {
    router.push(`/?category=${id}`)
  }
  else
  router.push(`/`)
}
</script>

<style scoped>
.mx-auto{
  max-width: 30%;
  height: 40px;
}
</style>