<template>
  <div class="base-counter">
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

const props = withDefaults(defineProps<{ disabled?: boolean }>(), {
  disabled: false,
});

function increment() {
  this.value++;
}
function decrement() {
  this.value--;
}
</script>

<style lang="scss" scoped>
.base-counter {
  display: flex;

  &__button,
  &__display {
    @include f-button;
    background: $light-1;
    width: 40px;
    height: 48px;
  }

  &__button {
    border: none;
    cursor: pointer;

    &:hover {
      color: $color-1;
    }

    &[disabled] {
      color: grey;
      cursor: not-allowed;
      :hover,
      :focus {
        color: grey;
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
