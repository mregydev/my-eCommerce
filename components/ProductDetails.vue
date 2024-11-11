<template>
  <div>
    <div v-if="!product || isProductDetailsLoading"> Loading....</div>
    <VRow class="pdp-container" v-else :key="product?.id">
      <div class="prodcut-image">
        <NuxtImg preload height="500" alt="product image" :src="product?.image"></NuxtImg>
      </div>
      <div class="product-details">
        <h1>{{ product?.name }}</h1>
        <div class="product-description">{{ product?.description }}</div>
        <div class="product-seller"><label id="product-seller">Seller : </label> <span
            aria-labelledby="product-seller">{{ product?.seller }}</span></div>
        <div class="product-seller"><label id="product-price">Price : </label> <span aria-labelledby="product-price">{{
          formatPrice(product?.price) }}</span></div>
        <div class="product-seller"><label id="product-quantity">Quantity : </label><span
            aria-labelledby="product-quantity">{{ product?.quantity }}</span></div>
        <div class="product-rating"><b>Rating : </b>
          <VRating :model-value="product?.rating"></VRating>
        </div>

        <VBtn aria-label="add to cart button" color="primary" @click="" class="add-to-cart-btn">
          <VIcon left>mdi-cart</VIcon>
          Add to Cart
        </VBtn>
      </div>
    </VRow>
  </div>
</template>
<script lang="ts" setup>


import { VRating } from 'vuetify/components';
import { useProductStore } from '~/store/productStore';


const store = useProductStore();
const { fetchProductDetails } = store
const { product, isProductDetailsLoading } = storeToRefs(store)


const router = useRoute();

//only on server side
await useAsyncData('product', () => {
  const productId = router.params.id;
  return fetchProductDetails(productId ? parseInt(productId.toString()) : 0)
}, { server: true })

// set meta on server side to avoid reactivity overhead on clientside
useServerHead({
  title: product.value?.name,
  meta: [
    { name: product.value?.name },
    { content: product.value?.description },
  ]
})
// fetch only on client side when coming from client navigation
onBeforeRouteUpdate(async () => {
  const productId = router.params.id;
  await fetchProductDetails(productId ? parseInt(productId.toString()) : 0)
})





</script>


<style lang="scss" scoped>
.pdp-container {
  line-height: 2.5;
  display: flex;

  .product-rating {
    display: flex;
  }
}

.prodcut-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

}

.product-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.add-to-cart-btn {
  height: 50px;
  margin: auto;
  width: 50%;
  padding: 10px;
}

label {
  font-weight: bold;
}
</style>