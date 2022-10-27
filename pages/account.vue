<template>
  <div class="account-page">
    <div class="account-page__wrapper">
      <h1 class="account-page__header">
        Your<br />
        <span class="account-page__header--color">personal details</span>
      </h1>
      <AccountCard />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.account-page {
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
