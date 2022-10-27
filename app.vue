<template>
  <div class="main">
    <NavBar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { fetchCategories } = await useCategories();
await fetchCategories();
</script>
<style scoped lang="scss"></style>
