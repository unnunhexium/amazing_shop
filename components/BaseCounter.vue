<template>
  <div :class="counterClasses">
    <button
      class="base-counter__button"
      @click="decrement"
      :disabled="value === 0"
    >
      -
    </button>
    <p class="base-counter__display">{{ value }}</p>
    <button class="base-counter__button" @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
const value = ref(0);

const props = withDefaults(
  defineProps<{ disabled?: boolean; reduced?: boolean }>(),
  {
    disabled: false,
    reduced: false,
  }
);

function increment() {
  this.value++;
}
function decrement() {
  this.value--;
}

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
