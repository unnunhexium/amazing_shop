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
          <nuxt-link to="/checkout">
            <img src="@/src/icon-cart.svg" />
          </nuxt-link>
          <div class="nav-bar__dropdown">
            <button
              @click="toggleListVisibilty"
              class="nav-bar__dropdown-button"
            >
              <img src="@/src/icon-user.svg" />
            </button>
            <div class="nav-bar__dropdown-content">
              <nuxt-link
                v-if="!userStore.token"
                to="/login"
                class="nav-bar__dropdown-element"
              >
                Sign in
              </nuxt-link>
              <nuxt-link
                v-if="userStore.token"
                to="/account"
                class="nav-bar__dropdown-element"
              >
                My account
              </nuxt-link>
              <nuxt-link
                class="nav-bar__dropdown-element"
                v-if="!userStore.token"
                to="/register"
              >
                Sign up
              </nuxt-link>
              <button
                class="nav-bar__dropdown-element nav-bar__dropdown-element--button"
                v-if="userStore.token"
                @click="userStore.token = null"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="nav-bar__line" v-if="!simplified" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';

const userStore = useUser();

withDefaults(defineProps<{ simplified?: boolean }>(), {
  simplified: false,
});

const listVisibilty = ref<boolean>();

const { categories } = await useCategories();

function toggleListVisibilty() {
  listVisibilty.value = !listVisibilty.value;
}
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
    &:hover > .nav-bar__dropdown-content {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 15px;
      width: 120px;
    }
  }
  &__dropdown-button {
    all: unset;
    cursor: pointer;
  }
  &__dropdown-content {
    display: none;
    text-align: right;
    padding: 0.5em 0;
    margin-top: 1em;
    background: $grey-1;
    border-radius: 4px;
    z-index: 2;
  }
  &__dropdown-element {
    @include f-button;
    text-decoration: none;
    color: $dark-1;
    height: 30px;
    padding: 0.5em 0.75em 0 0;
    &:hover {
      color: $color-1;
    }
    &--button {
      background: none;
      border: none;
      text-align: end;
    }
  }
}
</style>
