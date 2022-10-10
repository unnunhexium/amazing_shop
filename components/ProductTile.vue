<template>
  <div class="product-tile">
    <div class="product-tile__wrapper">
      <h2 class="product-tile__subheader">New product</h2>
      <h1 class="product-tile__header">{{ product?.attributes.name }}</h1>
      <p class="product-tile__content">
        {{ product?.attributes.description }}
      </p>
      <BaseButton type="primary" :url="`/products/${product.id}`">
        See product
      </BaseButton>
    </div>
    <!-- <img
      :src="`http://localhost:1337${product?.attributes.image.data?.attributes.url}`"
      class="product-tile__img"
    /> -->
  </div>
</template>

<script setup lang="ts">
const { product, fetchProduct } = await useProduct();
await fetchProduct(18);
</script>

<style lang="scss" scoped></style>
