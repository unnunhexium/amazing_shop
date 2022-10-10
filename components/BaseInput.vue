<template>
  <div class="base-input">
    <label class="base-input__label">
      {{ label }}
      <input
        :class="
          type === 'text'
            ? ['base-input__input', { 'base-input__input--error': this.error }]
            : ['base-input__radio']
        "
        :value="value"
        @input="$emit('input', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
      />
    </label>
    <p v-if="error && type === 'text'" class="base-input__error">
      Wrong format
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  type?: string;
  placeholder: string;
  error?: boolean;
  value: string;
}

withDefaults(defineProps<Props>(), { type: 'text', error: false });
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
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }

  &__error {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #cd2c2c;
  }

  &__input {
    @include f-overline;
    letter-spacing: -0.25px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    min-width: 300px;
    margin-top: 10px;
    padding: 18px 0 18px 24px;
    outline: 0;

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
