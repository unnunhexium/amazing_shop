<template>
  <div class="app">
    <TheHero />
    <div class="layout-wrapper">
      <CategoriesList />
      <FeaturedProducts />
      <AboutTile />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout-wrapper {
  margin: 0 50px;
}
</style>
