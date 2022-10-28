<template>
  <div class="category-page">
    <div class="category-page__header">
      {{ category.attributes.name }}
    </div>
    <div class="boxed-layout">
      <div>
        <ProductCard
          class="category-page__product-card"
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
        populate: ['image'],
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
  return category.attributes.products.data.map((product) => ({
    id: product.id,
    name: product.attributes.name,
    description: product.attributes.description,
    flag: product.attributes.flag,
    imageUrl: product.attributes.image.data.attributes.url,
  }));
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
  &__product-card {
    margin-bottom: 10em;
  }
}
</style>
