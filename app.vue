<template>
  <div class="main">
    <NavBar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const { fetchCategories } = await useCategories();

await fetchCategories();

onMounted(async () => {
  await cartStore.loadCartInstance();
  await cartStore.getCartItems();
});
</script>
<style scoped lang="scss"></style>
