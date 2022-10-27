<template>
  <div class="category-page">
    <div class="category-page__header">
      {{ category.attributes.name }}
    </div>
    <div class="layout-wrapper boxed-layout">
      <div>
        <ProductCard
          v-for="(product, index) in products"
          :product="product"
          :reversed="index % 2 === 1"
        />
        <CategoriesList />
        <AboutTile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from '@/interfaces/Category';
import qs from 'qs';

const route = useRoute();
const query = qs.stringify(
  {
    populate: {
      products: {
        populate: ['main_image'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
const { data: category } = await useApi<{ data: Category }>(
  `categories/${route.params.category}?${query}`
);

const products = computed(() => {
  return category.attributes.products.data;
});
</script>

<style lang="scss" scoped>
.category-page {
  &__header {
    @include f-h1;
    text-transform: uppercase;
    color: $light-3;
    background: $dark-1;
    height: 200px;
    text-align: center;
    padding-top: 98px;
    margin-bottom: 160px;
  }
}
</style>
