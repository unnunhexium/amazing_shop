<template>
  <div class="categories-list">
    <CategoryTile
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script setup lang="ts">
const { categories } = await useCategories();
</script>

<style lang="scss" scoped>
.categories-list {
  padding: 10.5em 0 10.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  column-gap: 30px;
}
</style>
