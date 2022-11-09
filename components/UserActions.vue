<template>
  <div class="user-actions">
    <ClientOnly>
      <BaseButton
        v-if="!userStore.token"
        class="user-actions__element"
        type="primary"
        :url="`/login`"
      >
        Sign in
      </BaseButton>

      <BaseButton
        v-if="userStore.token"
        class="user-actions__element"
        type="primary"
        :url="`/account`"
      >
        My account
      </BaseButton>

      <BaseButton
        v-if="!userStore.token"
        class="user-actions__element"
        type="primary"
        :url="`/register`"
      >
        Sign up
      </BaseButton>

      <BaseButton
        v-if="userStore.token"
        class="user-actions__element"
        type="primary"
        @click="userStore.token = null"
      >
        Log out
      </BaseButton>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';

const userStore = useUser();
</script>

<style lang="scss" scoped>
.user-actions {
  background-color: $light-3;
  padding: 2em;
  width: 200px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  &__element {
    display: block;
    text-align: center;
    height: 40px;
    padding: 10px 0;
  }
}
</style>
