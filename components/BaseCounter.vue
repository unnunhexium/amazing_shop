<template>
  <div :class="counterClasses">
    <button
      class="base-counter__button"
      @click="emit('decrement')"
      :disabled="props.value === 0"
    >
      -
    </button>
    <p class="base-counter__display">{{ props.value }}</p>
    <button class="base-counter__button" @click="$emit('increment')">+</button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ disabled?: boolean; reduced?: boolean; value?: number }>(),
  {
    disabled: false,
    reduced: false,
    value: 1,
  }
);

const emit = defineEmits(['decrement', 'increment']);

const counterClasses = computed(() => {
  return ['base-counter', { 'base-counter--reduced': props.reduced }];
});
</script>

<style lang="scss" scoped>
.base-counter {
  display: flex;
  &--reduced {
    height: 32px;
    .base-counter__button,
    .base-counter__display {
      width: 32px;
      height: 32px;
    }
    .base-counter__display {
      line-height: 32px;
    }
  }
  &__button,
  &__display {
    @include f-button;
    background: $light-1;
    width: 40px;
    height: 50px;
  }
  &__button {
    border: none;
    cursor: pointer;
    &:hover {
      color: $color-1;
    }
    &[disabled] {
      color: $grey-1;
      cursor: not-allowed;
      :hover,
      :focus {
        color: $grey-1;
      }
    }
  }
  &__display {
    margin: 0px;
    text-align: center;
    line-height: 48px;
  }
}
</style>
