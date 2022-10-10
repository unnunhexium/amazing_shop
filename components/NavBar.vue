<template>
  <div class="nav-bar">
    <nav class="nav-bar__nav">
      <a href="/">
        <img src="@/src/logo.svg" />
      </a>
      <ul class="nav-bar__list">
        <li>
          <nuxt-link class="nav-bar__list-item" to="/"> Home </nuxt-link>
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          :category="category"
        >
          <nuxt-link
            class="nav-bar__list-item"
            :to="`/categories/${category.attributes.name}`"
          >
            {{ category.attributes.name }}
          </nuxt-link>
        </li>
      </ul>
      <a href="" v-if="!simplified">
        <img src="@/src/icon-cart.svg" />
      </a>
    </nav>
    <div class="nav-bar__line" v-if="!simplified" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ simplified?: boolean }>(), {
  simplified: false,
});

const { categories, fetchCategories } = await useCategories();
await fetchCategories();
</script>

<style lang="scss" scoped>
h2 {
  color: pink;
}
.nav-bar {
  padding: 0 50px;
  background: $dark-1;
  &__nav {
    display: flex;
    justify-content: space-between;
    padding: 2em 0 2.25em;
  }

  &__list {
    display: flex;
    gap: 2em;
    list-style: none;
  }

  &__list-item {
    @include f-subtitle;
    color: $light-1;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
  }

  &__line {
    content: '';
    display: block;
    // position: relative;
    height: 1px;
    // width: 100%;
    background: $light-3;
    opacity: 20%;
    order: 1;
  }
}
</style>
