<template>
  <div class="checkout-card">
    <h3 class="checkout-card__header">Checkout</h3>
    <h6 class="checkout-card__subheader">Billing details</h6>
    <div class="checkout-card__wrapper-h">
      <BaseInput
        class="checkout-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'name',
          })
        "
        :modelValue="checkoutData.name"
        type="text"
        placeholder="e.g. Jessica"
        label="Name"
        :labelBold="true"
      />
      <BaseInput
        class="checkout-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'surname',
          })
        "
        :modelValue="checkoutData.surname"
        type="text"
        placeholder="e.g. Jones"
        label="Surname"
        :labelBold="true"
      />
    </div>
    <div class="checkout-card__wrapper-h">
      <BaseInput
        class="checkout-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            key: 'email',
          })
        "
        :modelValue="checkoutData.email"
        type="text"
        placeholder="e.g. email@email.com"
        label="Email"
        :labelBold="true"
      />
      <BaseInput
        class="checkout-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            key: 'phone',
          })
        "
        :modelValue="checkoutData.phone"
        type="number"
        placeholder="e.g. 432567664"
        label="Phone"
        :labelBold="true"
      />
    </div>
    <h6 class="checkout-card__subheader">Shipping info</h6>
    <div class="checkout-card__wrapper-h">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: $event,
            key: 'streetAndNumber',
          })
        "
        :modelValue="checkoutData.streetAndNumber"
        type="text"
        placeholder="e.g. 32 Park Street"
        label="Street name and number"
        :labelBold="true"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: $event,
            key: 'post-code',
          })
        "
        :modelValue="checkoutData.postCode"
        type="text"
        placeholder="e.g. 34-223"
        label="Post code/ZIP code"
        :labelBold="true"
      />
    </div>
    <div class="checkout-card__wrapper-h">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'town',
          })
        "
        :modelValue="checkoutData.town"
        type="text"
        placeholder="e.g. London"
        label="Town"
        :labelBold="true"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'country',
          })
        "
        :modelValue="checkoutData.country"
        type="text"
        placeholder="e.g. Switzerland"
        label="country"
        :labelBold="true"
      />
    </div>
    <h6 class="checkout-card__subheader">Payment details</h6>
  </div>
</template>

<script setup lang="ts">
const checkoutData = reactive({
  email: '',
  password: '',
  name: '',
  surname: '',
  phone: '',
  streetAndNumber: '',
  postCode: '',
  town: '',
  country: '',
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style lang="scss" scoped>
.checkout-card {
  background: $light-3;
  border-radius: 12px;
  padding: 3em;
  width: 730px;
  margin: 0 auto;
  &__header {
    @include f-h3;
    text-transform: uppercase;
    padding-bottom: 1.25em;
  }
  &__subheader {
    @include f-subtitle;
    color: $color-1;
    text-transform: uppercase;
    padding-bottom: 0.85em;
  }
  &__wrapper-h {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    margin-bottom: 1em;
  }
}
</style>
