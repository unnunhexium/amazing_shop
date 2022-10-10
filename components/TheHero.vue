<template>
  <div class="the-hero">
    <div class="the-hero__wrapper">
      <h2 class="the-hero__subheader">{{ hero.attributes.subheader }}</h2>
      <h1 class="the-hero__header">{{ hero.attributes.header }}</h1>
      <p class="the-hero__content">
        {{ hero.attributes.content }}
      </p>
      <BaseButton
        type="primary"
        :url="`/products/${hero.attributes.product.data.id}`"
      >
        {{ hero.attributes.button_text }}
      </BaseButton>
    </div>
    <img
      :src="`http://localhost:1337${hero.attributes.image.data.attributes.url}`"
      class="the-hero__img"
    />
  </div>
</template>

<script setup lang="ts">
const { hero, fetchHero } = await useHero();
await fetchHero();
</script>

<style lang="scss" scoped>
.the-hero {
  color: $light-1;
  background: $dark-1;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin-bottom: 12.5em;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  &__img {
  }
}
</style>
