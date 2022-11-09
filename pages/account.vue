<template>
  <div class="account-page">
    <div class="boxed-layout">
      <h1 class="account-page__header">
        Your<br />
        <span class="account-page__header--color">personal details</span>
      </h1>
      <AccountCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';

const userStore = useUser();
</script>
<style lang="scss" scoped>
.account-page {
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
