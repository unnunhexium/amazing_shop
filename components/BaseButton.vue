<template>
  <button
    v-if="!url"
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
  <nuxt-link
    v-else
    :class="buttonClasses"
    :to="`http://localhost:3000${url}`"
    :disabled="disabled"
  >
    <slot />
    <img
      v-if="type === 'tertiary'"
      class="base-button__arrow"
      src="/arrow.svg"
    />
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  type?: string;
  disabled?: boolean;
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'secondary',
  disabled: false,
});

const buttonClasses = computed(() => {
  return [
    'base-button',
    { 'base-button--primary': props.type === 'primary' },
    { 'base-button--secondary': props.type === 'secondary' },
    { 'base-button--tertiary': props.type === 'tertiary' },
  ];
});
const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
.base-button {
  @include f-button;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  &__arrow {
    margin-left: 13px;
  }
  &--primary {
    background: $color-1;
    color: $light-3;
    border: 1px solid transparent;
    &:hover {
      background: $color-2;
    }
    &:active {
      background: darken($color-1, 10%);
    }
    &:focus-visible {
      outline: none;
      background: darken($color-1, 20%);
    }
  }
  &--secondary {
    background: $light-3;
    border: 1px solid $dark-1;
    &:hover {
      background: $dark-1;
      color: $light-3;
    }
    &:active {
      background: $dark-1;
    }
    &:focus-visible {
      outline: none;
      background: $dark-1;
      color: $light-3;
    }
  }
  &--primary,
  &--secondary {
    &[disabled='true'] {
      opacity: 50%;
      background: $grey-1;
      cursor: not-allowed;
      :hover,
      :focus {
        background: $grey-1;
      }
    }
  }
  &--tertiary {
    background: none;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: $color-1;
    }
    &:focus-visible {
      outline: none;
      color: $color-1;
    }
    &[disabled='true'] {
      color: $grey-1;
      cursor: not-allowed;
      :hover,
      :focus {
        color: $grey-1;
      }
    }
  }
}
</style>
