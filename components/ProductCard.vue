<template>
  <div :class="productCardClasses">
    <img
      :src="`http://localhost:1337${product.imageUrl}`"
      class="product-card__img"
    />
    <div class="product-card__wrapper">
      <p class="product-card__flag" v-if="product.flag">
        {{ product.flag }}
      </p>
      <h1 class="product-card__header">{{ product.name }}</h1>
      <p class="product-card__content">
        {{ product.description }}
      </p>
      <BaseButton
        v-if="simplified"
        type="primary"
        :url="`/products/${product.id}`"
      >
        See product
      </BaseButton>
      <div v-else>
        <p class="product-card__price">$ {{ product.price }}</p>
        <div class="product-card__button-wrapper">
          <BaseCounter />
          <BaseButton type="primary" @click="addToCart">Add to cart</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';

interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    flag: string;
    imageUrl: string;
    price: number;
  };
  reversed?: boolean;
  simplified?: boolean;
  reduced?: boolean;
}
const props = defineProps<Props>();

const productCardClasses = computed(() => {
  return [
    'product-card',
    {
      'product-card--reversed': props.reversed,
      'product-card--simplified': props.simplified,
      'product-card--reduced': props.reduced,
    },
  ];
});

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const addToCart = () => {
  cartStore.addToCart({ id: props.product.id, qty: 1 });
};
</script>

<style lang="scss" scoped>
.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  &__img {
    border-radius: 8px;
  }
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
    // @include lg {
    //   @include f-h3;
    // }
  }
  &__content {
    @include f-content;
    opacity: 0.75;
  }
  &__price {
    @include f-h6;
    margin-bottom: 45px;
  }
  &__button-wrapper {
    display: flex;
    gap: 0.5em;
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

  &--simplified {
    .product-card__header {
      padding: 24px 0 24px;
    }
    .product-card__content {
      padding-bottom: 40px;
    }
  }
  &--reduced {
    .product-card__header {
      @include f-h2;
      padding: 16px 0 32px;
    }
    .product-card__content {
      padding-bottom: 40px;
    }
  }
}
</style>
