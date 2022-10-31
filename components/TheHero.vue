<template>
  <div class="the-hero">
    <div class="boxed-layout">
      <ProductCard :product="heroData" :reversed="true" :simplified="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { hero, fetchHero } = await useHero();
await fetchHero();

const heroData = computed(() => ({
  id: hero.value.attributes.product.data.id,
  name: hero.value.attributes.name,
  description: hero.value.attributes.description,
  flag: hero.value.attributes.flag,
  imageUrl: hero.value.attributes.image.data.attributes.url,
  price: null,
}));
</script>

<style lang="scss" scoped>
.the-hero {
  color: $light-1;
  background: $dark-1;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5.5em;
  &__wrapper {
    width: 40%;
    margin-top: 8em;
  }
  &__subheader {
    @include f-overline;
    text-transform: uppercase;
    opacity: 0.5;
  }
  &__header {
    @include f-h1;
    text-transform: uppercase;
    padding: 24px 0;
  }
  &__content {
    @include f-content;
    opacity: 0.75;
    padding-bottom: 40px;
  }
}
</style>
