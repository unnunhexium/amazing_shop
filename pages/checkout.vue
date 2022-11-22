<template>
  <div class="checkout-page">
    <div class="boxed-layout">
      <BaseButton type="tertiary" class="checkout-page__button" @click="goBack">
        Go back
      </BaseButton>
      <div class="checkout-page__wrapper">
        <CheckoutCard />
        <SummaryCard class="checkout-page__cart-card" />
      </div>
      <!-- <SuccessCard /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
function goBack() {
  const router = useRouter();
  return router.back();
}
</script>
<style lang="scss" scoped>
.layout-wrapper {
  margin: 0 50px;
}
.checkout-page {
  background: #f2f2f2;
  padding-bottom: 8.75em;
  &__button {
    margin: 5em 0 2.375em;
    padding-left: 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-start;
    gap: 30px;
  }
  &__cart-card {
    width: 100%;
  }
}
</style>
