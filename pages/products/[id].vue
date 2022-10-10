<template>
  <div>
    {{ product }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { product, fetchProduct } = await useProduct();
await fetchProduct(route.params.id.toString());
</script>

<style lang="scss" scoped></style>
