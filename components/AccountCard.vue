<template>
  <form novalidate @submit.prevent="$emit('save-changes')" class="account-card">
    <h6 class="account-card__subheader">Account details</h6>
    <div class="wrapper-h-grid">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            key: 'email',
          })
        "
        :modelValue="accountData.email"
        type="text"
        placeholder="e.g. email@email.com"
        label="Email"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: $event,
            key: 'password',
          })
        "
        :modelValue="accountData.password"
        type="text"
        placeholder="e.g. ******"
        label="Password"
      />
    </div>
    <h6 class="account-card__subheader">Billing details</h6>
    <div class="wrapper-h-grid">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'name',
          })
        "
        :modelValue="accountData.name"
        type="text"
        placeholder="e.g. Jessica"
        label="Name"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'surname',
          })
        "
        :modelValue="accountData.surname"
        type="text"
        placeholder="e.g. Jones"
        label="Surname"
      />
    </div>
    <div class="wrapper-h-grid">
      <BaseInput
        class="checkout-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            key: 'phone',
          })
        "
        :modelValue="accountData.phone"
        type="number"
        placeholder="e.g. 432567664"
        label="Phone"
        :labelBold="true"
      />
    </div>
    <h6 class="account-card__subheader">Address details</h6>
    <div class="wrapper-h-grid">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: $event,
            key: 'streetAndNumber',
          })
        "
        :modelValue="accountData.streetAndNumber"
        type="text"
        placeholder="e.g. 32 Park Street"
        label="Street name and number"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: $event,
            key: 'post-code',
          })
        "
        :modelValue="accountData.postCode"
        type="text"
        placeholder="e.g. 34-223"
        label="Post code/ZIP code"
      />
    </div>
    <div class="wrapper-h-grid">
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'town',
          })
        "
        :modelValue="accountData.town"
        type="text"
        placeholder="e.g. London"
        label="Town"
      />
      <BaseInput
        class="account-card__input"
        @update:modelValue="
          $emit('set-form-field', {
            value: capitalizeFirstLetter($event),
            key: 'country',
          })
        "
        :modelValue="accountData.country"
        type="text"
        placeholder="e.g. Switzerland"
        label="country"
      />
    </div>
    <BaseButton
      class="account-card__button"
      type="primary"
      :disabled="!accountData.email"
    >
      Save changes
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
const accountData = reactive({
  email: '',
  password: '',
  name: '',
  surname: '',
  streetAndNumber: '',
  postCode: '',
  town: '',
  country: '',
  phone: '',
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style lang="scss" scoped>
.account-card {
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 4em;
  margin: 4em 0 6em;
  &__subheader {
    @include f-subtitle;
    color: $color-1;
    text-transform: uppercase;
    padding-bottom: 0.85em;
  }

  &__button {
    margin: 40px 0 0 auto;
    display: flex;
  }
}
</style>
