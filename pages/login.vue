<template>
  <div class="login-page__wrapper">
    <h1 class="login-page__header">
      Welcome back!<br />
      Care to
      <span class="login-page__header--color">log in</span>?
    </h1>
    <LoginCard :loginData="loginData" @set-form-field="setFormField" />
  </div>
</template>

<script setup lang="ts">
import { Hero } from '@/interfaces/Hero';

const error = ref<Hero>(null);
const loginData = reactive({
  email: '',
  password: '',
});

function setFormField({ value, key }) {
  loginData[key] = value;
}
</script>

<style lang="scss" scoped>
.login-page {
  &__wrapper {
    max-width: 624px;
    margin: 0 auto;
  }
  &__header {
    @include f-h1;
    padding-top: 1em;
    &--color {
      @include f-h1;
      color: $color-1;
    }
  }
}
</style>
