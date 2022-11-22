<template>
  <div class="nav-bar">
    <div class="boxed-layout">
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
              :to="`/categories/${category.id}`"
            >
              {{ category.attributes.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-bar__icons-wrapper" v-if="!simplified">
          <div class="nav-bar__dropdown">
            <nuxt-link class="nav-bar__dropdown" to="/checkout">
              <img src="@/src/icon-cart.svg" />
            </nuxt-link>
            <ClientOnly>
              <CartCard class="nav-bar__dropdown-content" />
            </ClientOnly>
          </div>

          <div class="nav-bar__dropdown">
            <nuxt-link
              class="nav-bar__dropdown"
              to="/account"
              tag="button"
              :disabled="!userStore.token"
            >
              <img src="@/src/icon-user.svg" />
            </nuxt-link>
            <UserActions class="nav-bar__dropdown-content" />
          </div>
        </div>
      </nav>
      <div class="nav-bar__line" v-if="!simplified" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';

withDefaults(defineProps<{ simplified?: boolean }>(), {
  simplified: false,
});

const { categories } = await useCategories();

const userStore = useUser();
</script>

<style lang="scss" scoped>
h2 {
  color: pink;
}
.nav-bar {
  background: $dark-1;
  &__nav {
    display: flex;
    justify-content: space-between;
    padding-top: 2em;
    padding-bottom: 2.25em;
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
    &:hover {
      color: $color-1;
    }
  }
  &__line {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: $light-3;
    opacity: 20%;
    order: 22;
  }
  &__icons-wrapper {
    display: flex;
    gap: 20px;
  }

  &__dropdown {
    display: flex;
    flex-direction: column;
    display: inline-block;
    position: relative;

    .nav-bar__dropdown-content {
      display: none;
      z-index: 2;
    }
    &:hover > .nav-bar__dropdown-content {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 30px;
    }
  }
}
</style>
