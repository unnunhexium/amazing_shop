<template>
  <div class="success-card">
    <img src="@/src/success.svg" class="success-card__img" />
    <h3 class="success-card__header">Thank you <br />for your order</h3>
    <p class="success-card__subheader">
      You will receive an email confirmation shortly.
    </p>
    <BaseButton class="success-card__button" type="primary" :url="`/`">
      Back to home
    </BaseButton>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.success-card {
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 4em;
  margin: 4em 0 6em;
  width: 540px;
  &__img {
    margin: 0 auto;
  }
  &__header {
    @include f-h3;
    padding: 1em 0 0.75em;
    text-transform: uppercase;
  }
  &__subheader {
    @include f-h6;
    font-weight: 500;
    opacity: 0.5;
  }
  &__button {
    text-transform: uppercase;
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 3em;
  }
}
</style>
