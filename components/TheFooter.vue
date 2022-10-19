<template>
  <div class="the-footer">
    <NavBar class="the-footer__nav" :simplified="true" />
    <div class="the-footer__wrapper">
      <p class="the-footer__content">
        {{ footer?.attributes.content }}
      </p>
      <div class="the-footer__media">
        <nuxt-link to="https://www.facebook.com/">
          <img src="@/src/icon-facebook.svg" />
        </nuxt-link>
        <nuxt-link to="https://www.twitter.com/">
          <img src="@/src/icon-twitter.svg" />
        </nuxt-link>
        <nuxt-link to="https://www.instagram.com/">
          <img src="@/src/icon-instagram.svg" />
        </nuxt-link>
      </div>
    </div>
    <p class="the-footer__copyrights">{{ footer?.attributes.copyrights }}</p>
  </div>
</template>

<script setup lang="ts">
const { footer, fetchFooter } = await useFooter();
await fetchFooter();
</script>

<style lang="scss" scoped>
.the-footer {
  color: $light-1;
  background: $dark-1;
  padding: 40px 0 48px;
  &__wrapper {
    display: flex;
  }
  &__content,
  &__copyrights {
    padding: 0 50px;
    @include f-content;
    opacity: 40%;
  }
  &__content {
    text-align: justify;
    text-justify: auto;
    width: 45%;
  }
  &__copyrights {
    padding-top: 56px;
    font-weight: 700;
  }
  &__media {
    display: flex;
    align-items: baseline;
    align-self: flex-end;
    margin: 0 50px 0 auto;
    gap: 1em;
  }
}
</style>
