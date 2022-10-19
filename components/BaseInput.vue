<template>
  <div class="base-input">
    <label class="base-input__label">
      {{ label }}
      <input
        class="base-input__input"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :type="type"
        :placeholder="placeholder"
      />
    </label>
    <p class="base-input__error" v-if="errorMessage && modelValue">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  type?: string;
  placeholder: string;
  errorMessage?: string;
  modelValue: string;
}

withDefaults(defineProps<Props>(), { type: 'text' });
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  &__label,
  &__error,
  &__input {
    display: block;
  }
  &__label {
    @include f-content;
    color: $color-1;
    text-transform: uppercase;
  }
  &__error {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #cd2c2c;
  }
  &__input {
    letter-spacing: -0.25px;
    border: 1px solid $grey-1;
    border-radius: 8px;
    min-width: 300px;
    width: 100%;
    margin: 6px 0 6px;
    padding: 14px 0 14px 22px;
    outline: 0;
    position: relative;
    &--error {
      border: 2px solid #cd2c2c;
    }
    &:active,
    &:focus {
      border: 1px solid $color-1;
      caret-color: $color-1;
    }
  }
}
</style>
