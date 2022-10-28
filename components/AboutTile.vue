<template>
  <div class="about-tile">
    <div class="about-tile__wrapper">
      <h4 class="about-tile__header">
        {{ about.attributes.header }}
      </h4>
      <p class="about-tile__content">
        {{ about.attributes.content }}
      </p>
    </div>
    <img
      :src="`http://localhost:1337${about.attributes.image.data.attributes.url}`"
      class="about-tile__image"
    />
  </div>
</template>

<script setup lang="ts">
const { about, fetchAbout } = await useAbout();
await fetchAbout();
</script>

<style lang="scss" scoped>
.about-tile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding-bottom: 12.5em;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__header {
    @include f-h2;
    text-transform: uppercase;
    max-width: 445px;
    padding-bottom: 32px;

    &--color {
      color: $color-1;
    }
  }
  &__content {
    @include f-content;
    opacity: 0.5;
    max-width: 445px;
    padding-right: 4em;
  }
  &__image {
    width: 100%;
  }
}
</style>
