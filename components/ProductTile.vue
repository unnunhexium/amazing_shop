<template>
  <div class="product-tile">
    <img
      :src="`http://localhost:1337${product.attributes.image.data.attributes.url}`"
      class="product-tile__img"
    />
    <h5 class="product-tile__header">{{ product.attributes.name }}</h5>
    <BaseButton type="primary" :url="`/products/${product.id}`">
      See product
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/interfaces/Product';

const props = defineProps<{ product: Product }>();
</script>

<style lang="scss" scoped>
.product-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__img {
    border-radius: 8px;
    max-width: 350px;
  }
  &__header {
    @include f-h5;
    margin-top: 1.65em;
    margin-bottom: 0.75em;
  }
}
</style>
