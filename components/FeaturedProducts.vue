<template>
  <div class="featured-products">
    <div class="featured-products__wrapper--large">
      <img
        :src="`http://localhost:1337${featuredProductLarge.data.attributes.image.data.attributes.url}`"
        class="featured-products__img"
      />
      <div class="featured-products__text">
        <h1 class="featured-products__h1">
          {{ featuredProductLarge.data.attributes.header }}
        </h1>
        <p class="featured-products__content">
          {{ featuredProductLarge.data.attributes.content }}
        </p>
        <BaseButton
          type="primary"
          class="featured-products__button--primary"
          :url="`/products/${featuredProductLarge.data.id}`"
        >
          {{ featuredProductLarge.data.attributes.button_text }}
        </BaseButton>
      </div>
    </div>

    <div class="featured-products__wrapper--medium">
      <div class="featured-products__text">
        <h4 class="featured-products__h4">
          {{ featuredProductMedium.data.attributes.header }}
        </h4>
        <BaseButton
          type="secondary"
          class="featured-products__button"
          :url="`/products/${featuredProductMedium.data.id}`"
        >
          {{ featuredProductMedium.data.attributes.button_text }}
        </BaseButton>
      </div>
      <img
        :src="`http://localhost:1337${featuredProductMedium.data.attributes.image.data.attributes.url}`"
        class="featured-products__img"
      />
    </div>

    <div class="featured-products__wrapper--small">
      <img
        :src="`http://localhost:1337${featuredProductSmall.data.attributes.image.data.attributes.url}`"
        class="featured-products__img"
      />
      <div class="featured-products__text">
        <h4 class="featured-products__h4">
          {{ featuredProductSmall.data.attributes.header }}
        </h4>
        <BaseButton
          type="secondary"
          class="featured-products__button"
          :url="`/products/${featuredProductSmall.data.id}`"
        >
          {{ featuredProductSmall.data.attributes.button_text }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeaturedProduct } from '@/interfaces/FeaturedProduct';
// import { getFeaturedProducts } from '@/api/featuredProductsService';
// const [
//   { data: featuredProductLarge },
//   { data: featuredProductMedium },
//   { data: featuredProductSmall },
// ] = await Promise.all([
//   await getFeaturedProducts('large'),
//   await getFeaturedProducts('medium'),
//   await getFeaturedProducts('small'),
// ]);
// const featuredProductMedium = await getFeaturedProducts('medium');
// const featuredProductSmall = await getFeaturedProducts('small');
// const featuredProductLarge = await getFeaturedProducts('large');
const { data: featuredProductLarge } = await useFetch<{
  data: FeaturedProduct;
}>('http://localhost:1337/api/featured-product-tile-large?populate=*');
const { data: featuredProductMedium } = await useFetch<{
  data: FeaturedProduct;
}>('http://localhost:1337/api/featured-product-tile-medium?populate=*');
const { data: featuredProductSmall } = await useFetch<{
  data: FeaturedProduct;
}>('http://localhost:1337/api/featured-product-tile-small?populate=*');
</script>

<style lang="scss" scoped>
.featured-products {
  color: $light-1;
  display: grid;
  grid-template-rows: 560px 320px 320px;
  row-gap: 48px;
  padding-bottom: 12.5em;
  &__wrapper {
    &--large {
      background: $color-1;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 0 6em;
      .featured-products__img {
        max-height: 480px;
        align-self: flex-end;
      }
    }
    &--medium {
      .featured-products__img {
        position: relative;
        z-index: -1;
        object-fit: cover;
      }
      .featured-products__text {
        left: 140px;
        position: absolute;
      }
    }
    &--small {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      justify-content: space-between;
      border-radius: 8px 8px;
      .featured-products__img {
        z-index: -1;
      }
      .featured-products__text {
        background: $light-2;
      }
    }
    &--large,
    &--medium {
      display: flex;
      justify-content: space-between;
      border-radius: 8px;
    }
    &--medium,
    &--small {
      .featured-products__text {
        color: $dark-1;
        border-radius: 8px;
      }
      .featured-products__img {
        max-height: 320px;
      }
    }
  }
  &__text {
    padding: 4.5em 0 4em 4em;
  }
  &__subheader {
    @include f-overline;
    text-transform: uppercase;
    opacity: 0.5;
  }
  &__h1 {
    @include f-h1;
  }
  &__h4 {
    @include f-h4;
  }
  &__h1,
  &__h4 {
    text-transform: uppercase;
    padding: 24px 0;
  }
  &__content {
    @include f-content;
    opacity: 0.75;
    padding-bottom: 40px;
  }
  &__button:visited {
    color: $dark-1;
  }
  &__button:hover {
    color: $light-1;
  }
  &__button--primary {
    background: $dark-1;
    opacity: 100%;
  }
  &__img {
    max-height: 560px;
    max-width: 100%;
    display: inline-block;
    border-radius: 8px 8px;
  }
}
</style>
