<template>
  <div class="products-list">
    <h3 class="products-list__header">You may also like</h3>
    <div class="products-list__list">
      <ProductTile
        v-for="product in products.slice(0, 3)"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//to do: fetch only a few items from the same category NOT all products,
//for now it's too few products in the database so I decided to fetch all of them,
//but it will be changed in the future

const { products, fetchProducts } = useProducts();
await fetchProducts();
</script>

<style lang="scss" scoped>
.products-list {
  padding: 10em 0 10em;
  display: flex;
  flex-direction: column;
  text-align: center;
  &__header {
    @include f-h3;
    text-transform: uppercase;
    padding-bottom: 64px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-gap: 1.875em;
  }
}
</style>
