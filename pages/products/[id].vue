<template>
  <div class="product-page boxed-layout">
    <BaseButton type="tertiary" class="product-page__button" @click="goBack">
      Go back
    </BaseButton>
    <ProductCard :product="productData" :reduced="true" />
    <div class="product-page__text-wrapper">
      <div>
        <h3 class="product-page__header">Features</h3>
        <p class="product-page__content">{{ productData.features }}</p>
      </div>
      <div>
        <h3 class="product-page__header">In the box</h3>
        <ul class="product-page__content">
          <li
            class="product-page__content-element"
            v-for="item in productItemsData"
            :key="item.id"
          >
            <p class="product-page__content--color">
              {{ item.quantity }}
            </p>
            <p class="product-page__content--grey">
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-page__gallery">
      <div class="product-page__gallery-wrapper">
        <img
          :src="`http://localhost:1337${product.attributes.small_image_1.data.attributes.url}`"
          class="product-page__image"
        />
        <img
          :src="`http://localhost:1337${product.attributes.small_image_2.data.attributes.url}`"
          class="product-page__image"
        />
      </div>
      <img
        :src="`http://localhost:1337${product.attributes.large_image.data.attributes.url}`"
        class="product-page__image"
      />
    </div>
    <ProductsList />
    <CategoriesList />
    <AboutTile />
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/interfaces/Product';
const route = useRoute();

const { data: product } = await useApi<{ data: Product }>(
  `products/${route.params.id}?populate=*`
);

function goBack() {
  const router = useRouter();
  return router.back();
}

const productData = computed(() => ({
  id: product.id,
  name: product.attributes.name,
  description: product.attributes.description,
  flag: product.attributes.flag,
  imageUrl: product.attributes.image.data.attributes.url,
  price: product.attributes.price,
  features: product.attributes.features,
}));

const productItemsData = computed(() => {
  return product.attributes.product_items;
});
</script>

<style lang="scss" scoped>
.product-page {
  &__button {
    margin: 80px 0 55px;
    padding-left: 0;
  }
  &__text-wrapper {
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    grid-gap: 6.875em;
    margin: 10em 0;
  }
  &__header {
    @include f-h3;
    text-transform: uppercase;
    padding-bottom: 1em;
  }
  &__content {
    @include f-content;
    text-justify: auto;
    &--color {
      color: $color-1;
      padding-right: 21px;
    }
    &--grey {
      opacity: 0.5;
    }
  }
  &__content-element {
    list-style: none;
    padding-bottom: 8px;
    display: flex;
  }
  &__gallery {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }
  &__gallery-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }
  &__image {
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
  }
}
</style>
