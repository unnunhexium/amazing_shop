<template>
  <div class="cart-card">
    <div v-if="!disabled" class="text-wrapper-h">
      <h6 class="cart-card__header">Cart ({{ itemsQty }})</h6>
      <BaseButton
        class="cart-card__remove-button"
        type="tertiary"
        @click="cartStore.removeAllItems"
        :disabled="disabled"
      >
        Remove all
      </BaseButton>
    </div>
    <div v-if="disabled">
      <h6 class="cart-card__header">Your cart is empty</h6>
    </div>

    <ul class="cart-card__items-wrapper">
      <li
        class="cart-card__item"
        v-for="item in cartStore.cartData"
        :key="item.name_short"
      >
        <img
          :src="`http://localhost:1337${item.image}`"
          class="cart-card__img"
        />
        <div class="text-wrapper-v">
          <h1 class="cart-card__item-header">{{ item.name_short }}</h1>
          <p class="cart-card__item-price">$ {{ item.price }}</p>
        </div>
        <BaseCounter
          class="cart-card__item-counter"
          :reduced="true"
          :value="item.qty"
          @increment="increment(item.id)"
          @decrement="decrement(item.id)"
        />
      </li>
    </ul>
    <div class="text-wrapper-h">
      <p class="cart-card__price-text">Total</p>
      <p class="cart-card__price">$ {{ total }}</p>
    </div>
    <BaseButton
      class="cart-card__submit-button"
      type="primary"
      :url="`/checkout`"
    >
      Checkout
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();

const total = computed(() => {
  return cartStore.cartData
    .map(({ price }) => price)
    .reduce((prev, curr) => prev + curr, 0);
});

const itemsQty = computed(() => {
  return cartStore.cartData
    .map(({ qty }) => qty)
    .reduce((prev, curr) => prev + curr, 0);
});

function increment(id) {
  cartStore.addToCart(id, 1);
}

function decrement(id) {
  cartStore.removeOneItem(id);
}

const disabled = computed(() => {
  return cartStore.cart.length === 0;
});
</script>

<style lang="scss" scoped>
.cart-card {
  background-color: $light-3;
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 2em;
  width: 375px;
  &__header,
  &__price {
    @include f-h6;
    text-transform: uppercase;
  }
  &__remove-button {
    padding: 0;
  }
  &__img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    margin-right: 1em;
  }
  &__items-wrapper {
    margin: 2em 0 0.5em;
  }
  &__item {
    display: flex;
    align-items: center;
    list-style: none;
    padding-bottom: 1.5em;
  }
  &__item-header,
  &__item-price {
    @include f-content;
    font-weight: 700;
  }
  &__item-price {
    opacity: 0.5;
  }
  &__item-counter {
    margin-left: auto;
  }
  &__price-text {
    @include f-content;
    text-transform: uppercase;
    opacity: 0.5;
  }
  &__submit-button {
    display: block;
    text-align: center;
    margin-top: 1.5em;
  }
}
.text-wrapper-h {
  display: flex;
  justify-content: space-between;
}
.text-wrapper-v {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
