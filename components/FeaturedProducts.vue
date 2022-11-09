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

const { data: featuredProductLarge } = await useLazyFetch<{
  data: FeaturedProduct;
}>('http://localhost:1337/api/featured-product-tile-large?populate=*');
const { data: featuredProductMedium } = await useLazyFetch<{
  data: FeaturedProduct;
}>('http://localhost:1337/api/featured-product-tile-medium?populate=*');
const { data: featuredProductSmall } = await useLazyFetch<{
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
      .featured-products__text {
        padding-left: 60px;
      }
    }
    &--medium {
      .featured-products__img {
        position: relative;
        z-index: -1;
        object-fit: cover;
      }
      .featured-products__text {
        position: absolute;
        margin-top: 100px;
        margin-left: 60px;
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
        padding-left: 60px;
      }
      .featured-products__img {
        max-height: 320px;
      }
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &__subheader {
    @include f-overline;
    text-transform: uppercase;
    opacity: 0.5;
  }
  &__h1 {
    @include f-h1;
    padding-bottom: 24px;
  }
  &__h4 {
    @include f-h4;
    padding-bottom: 32px;
  }
  &__h1,
  &__h4 {
    text-transform: uppercase;
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
    display: inline-block;
    border-radius: 8px;
  }
}
</style>
