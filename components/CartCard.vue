<template>
  <div class="cart-card">
    <div class="text-wrapper-h">
      <h6 class="cart-card__header">Cart (3)</h6>
      <BaseButton class="cart-card__remove-button" type="tertiary">
        Remove all
      </BaseButton>
    </div>
    <ul class="cart-card__items-wrapper">
      <li class="cart-card__item">
        <img
          :src="`http://localhost:1337/uploads/image_gallery_3_c88b6d67b1.jpg`"
          class="cart-card__img"
        />
        <div class="text-wrapper-v">
          <h1 class="cart-card__item-header">XX99 MK II</h1>
          <p class="cart-card__item-price">$ 899</p>
        </div>

        <BaseCounter class="cart-card__item-counter" :reduced="true" />
      </li>
    </ul>
    <div class="text-wrapper-h">
      <p class="cart-card__price-text">Total</p>
      <p class="cart-card__price">$ 4 899</p>
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

<script>
export default {};
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
    margin: 2em 0;
  }
  &__item {
    display: flex;
    align-items: center;
    list-style: none;
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
