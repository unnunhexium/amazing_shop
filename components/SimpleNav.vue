<template>
  <nav class="simple-nav">
    <div class="simple-nav__wrapper">
      <a href="/">
        <img class="simple-nav__hamburger-icon" src="@/src/hamburger.svg" />
      </a>
      <a href="/">
        <img class="simple-nav__logo" src="@/src/logo.svg" />
      </a>
    </div>
    <a href="">
      <img class="simple-nav__cart-icon" src="@/src/cart-icon.svg" />
    </a>
  </nav>
  <div class="simple-nav__line" />
</template>

<style lang="scss" scoped>
.simple-nav {
  display: flex;
  justify-content: space-between;
  padding: 32px 0 36px;
  &__wrapper {
  }
  &__logo {
    // margin: 0 auto 0 42px;
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
