<template>
  <div class="products-container">
    <div v-if="isProductListLoading"> Loading....</div>
    <VRow>
      <VCol sm="12" md="3" x :key="product.id" v-for="product in products" @click="() => onItemClick(product.id)">
        <VCard class="product-item">
          <NuxtImg :src="product.logo" :alt="`${product.name} image`" height="300" width="100%" fit="cover" loading="lazy"></NuxtImg>
          <VCardTitle>
            <h3>{{ product.name }}</h3>
          </VCardTitle>
          <VCardSubtitle>
            <h4>{{ formatPrice(product.price) }}</h4>
          </VCardSubtitle>
          <VRating class="rating" :model-value="product.rating"></VRating>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
<script lang="ts" setup>


import { useProductStore } from '~/store/productStore';


const store = useProductStore();
const { fetchProductList } = store
const { products, isProductListLoading } = storeToRefs(store)


const router = useRouter();


//only on server side
useAsyncData('products', () => {
  const newCategoryId = router.currentRoute.value.query.category;
  return fetchProductList(newCategoryId ? parseInt(newCategoryId.toString()) : 0)
}, { server: true })

// fetch only on client side when coming from client navigation
onBeforeRouteUpdate(async () => {
  const newCategoryId = router.currentRoute.value.query.category;
  fetchProductList(newCategoryId ? parseInt(newCategoryId.toString()) : 0)
})

watch(router.currentRoute, (newValue) => {
  const newCategoryId = newValue.query.category;
  fetchProductList(newCategoryId ? parseInt(newCategoryId.toString()) : 0)
})


const onItemClick = (productId: string) => {
  if (productId) {
    router.push(`/product/${productId}`)
  }
}
</script>

<style lang="scss" scoped>
.products-container {
  padding: 20px;

  img {
    width: 100%;
  }

  .rating {
    color: #FFD700;
    max-width: 70%;
  }

  .product-item {
    cursor: pointer;
    box-shadow: 0px 0px 10px lightgray;
  }
}
</style>
