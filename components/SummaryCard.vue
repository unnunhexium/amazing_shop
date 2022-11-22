<template>
  <div class="summary-card">
    <h6 class="summary-card__header">Summary</h6>
    <ul class="summary-card__items-wrapper">
      <li
        class="summary-card__item"
        v-for="item in cartStore.cartData"
        :key="item.name_short"
      >
        <img
          :src="`http://localhost:1337${item.image}`"
          class="summary-card__img"
        />
        <div class="text-wrapper-v">
          <h1 class="summary-card__item-header">{{ item.name_short }}</h1>
          <p class="summary-card__item-price">$ {{ item.price }}</p>
        </div>
        <p class="summary-card__item-amount">x{{ item.qty }}</p>
      </li>
    </ul>
    <div class="summary-card__price-wrapper">
      <div class="text-wrapper-h">
        <p class="summary-card__price-text">Total</p>
        <p class="summary-card__price">$ {{ total }}</p>
      </div>
      <div class="text-wrapper-h">
        <p class="summary-card__price-text">Shipping</p>
        <p class="summary-card__price">$ {{ shipping }}</p>
      </div>
      <div class="text-wrapper-h">
        <p class="summary-card__price-text">Vat (Included)</p>
        <p class="summary-card__price summary-card__price-thin">$ {{ vat }}</p>
      </div>
      <div class="text-wrapper-h">
        <p class="summary-card__price-text">Grand total</p>
        <p class="summary-card__price summary-card__price--c">
          $ {{ grandTotal }}
        </p>
      </div>
    </div>
    <BaseButton
      class="summary-card__submit-button"
      type="primary"
      :url="`/checkout`"
    >
      Continue & pay
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
const shipping = ref(20);

const cartStore = useCartStore();

const total = computed(() => {
  return cartStore.cartData
    .map(({ price }) => price)
    .reduce((prev, curr) => prev + curr, 0);
});

const vat = computed(() => {
  return Math.round(+total.value * 0.23);
});

const grandTotal = computed(() => {
  return +total.value + shipping.value;
});
</script>

<style lang="scss" scoped>
.summary-card {
  background-color: $light-3;
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 2em;
  width: 375px;
  &__header,
  &__price {
    @include f-h6;
    text-transform: uppercase;
    &--c {
      color: $color-1;
    }
  }
  &__price-thin {
    font-weight: 500;
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
  &__item-price,
  &__item-amount {
    @include f-content;
    font-weight: 700;
  }
  &__item-price,
  &__item-amount {
    opacity: 0.5;
  }
  &__item-counter {
    margin-left: auto;
  }
  &__item-amount {
    margin-left: auto;
  }
  &__price-wrapper {
    div:last-child {
      margin: 24px 0 32px;
    }
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
  margin-bottom: 8px;
}
</style>
