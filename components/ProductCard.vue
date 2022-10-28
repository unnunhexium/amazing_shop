<template>
  <div :class="productCardClasses">
    <img
      :src="`http://localhost:1337${product.imageUrl}`"
      class="product-card__img"
    />
    <div class="product-card__wrapper">
      <p class="product-card__flag" v-if="product.flag">{{ product.flag }}</p>
      <h1 class="product-card__header">{{ product.name }}</h1>
      <p class="product-card__content">
        {{ product.description }}
      </p>
      <BaseButton type="primary" :url="`/products/${product.id}`">
        See product
      </BaseButton>
      <div v-if="!flag">
        <BaseCounter />
        <BaseButton type="primary">Add to cart</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: {
    id: string;
    name: string;
    description: string;
    flag: string;
    imageUrl: string;
  };
  reversed?: boolean;
}
const props = defineProps<Props>();
const flag = ref(true);

const productCardClasses = computed(() => {
  return ['product-card', { 'product-card--reversed': props.reversed }];
});
</script>

<style lang="scss" scoped>
.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 125px;
  }
  &__flag {
    @include f-overline;
    color: $color-1;
    text-transform: uppercase;
  }
  &__header {
    @include f-h1;
    text-transform: uppercase;
    padding: 24px 0;
    @include lg {
      @include f-h3;
    }
  }
  &__content {
    @include f-content;
    opacity: 0.75;
    padding-bottom: 40px;
  }

  &--reversed {
    .product-card__wrapper {
      margin-right: 125px;
      margin-left: 0;
      grid-column: 1;
      grid-row: 1;
    }

    .product-card__img {
      grid-column: 2;
    }
  }
}
</style>
