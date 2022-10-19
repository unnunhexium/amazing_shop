<template>
  <form
    novalidate
    @submit.prevent="$emit('register-user')"
    class="address-card"
  >
    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'name',
        })
      "
      :modelValue="addressData.name"
      type="text"
      placeholder="e.g. Jessica"
      label="Name"
    />

    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'surname',
        })
      "
      :modelValue="addressData.surname"
      type="text"
      placeholder="e.g. Jones"
      label="Surname"
    />

    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: $event,
          key: 'streetAndNumber',
        })
      "
      :modelValue="addressData.streetAndNumber"
      type="text"
      placeholder="e.g. 32 Park Street"
      label="Street name and number"
    />

    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: $event,
          key: 'post-code',
        })
      "
      :modelValue="addressData.postCode"
      type="text"
      placeholder="e.g. 34-223"
      label="Post code/ZIP code"
    />

    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'town',
        })
      "
      :modelValue="addressData.town"
      type="text"
      placeholder="e.g. London"
      label="Town"
    />

    <BaseInput
      class="address-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'country',
        })
      "
      :modelValue="addressData.country"
      type="text"
      placeholder="Switzerland"
      label="country"
    />
  </form>
</template>

<script setup lang="ts">
const addressData = reactive({
  name: '',
  surname: '',
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
.address-card {
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 4em;
  margin: 4em 0 6em;
}
</style>
