<template>
  <div class="category-tile">
    <img
      :src="`http://localhost:1337${category.attributes.image.data.attributes.url}`"
      class="category-tile__image"
    />
    <h6 class="category-tile__header">{{ category.attributes.name }}</h6>
    <BaseButton
      class="category-tile__button"
      type="tertiary"
      :url="`/categories/${category.attributes.name}`"
    >
      Shop
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ category: Category }>();
</script>

<style lang="scss" scoped>
.category-tile {
  background: $light-1;
  border-radius: 8px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &__image {
    position: absolute;
    bottom: 60%;
  }
  &__header {
    @include f-h6;
    text-transform: uppercase;
    margin-top: 6.45em;
  }
}
</style>
