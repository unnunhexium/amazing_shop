<template>
  <form class="login-card" novalidate @submit.prevent="login">
    <BaseInput
      class="login-card__email"
      @update:modelValue="
        $emit('set-form-field', { value: $event, key: 'email' })
      "
      :modelValue="loginData.email"
      type="email"
      placeholder="Please enter your email."
      :errorMessage="errorMessage"
      label="email"
    >
    </BaseInput>
    <p>{{ loginErrorContent('identifier') }}</p>
    <BaseInput
      class="login-card__password"
      @update:modelValue="
        $emit('set-form-field', { value: $event, key: 'password' })
      "
      :modelValue="loginData.password"
      type="password"
      placeholder="Please enter your password."
      label="password"
    >
    </BaseInput>
    <p class="login-card__error">{{ loginErrorContent('password') }}</p>
    <div class="login-card__buttons-wrapper">
      <BaseButton class="login-card__link" type="tertiary" :url="`/register`">
        Register instead
      </BaseButton>
      <BaseButton
        class="login-card__button"
        type="primary"
        :disabled="buttonDisabled"
      >
        Login
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import Login from '@/interfaces/Login';
import LoginError from '@/interfaces/LoginError';
import { useUser } from '@/store/user';

const props = defineProps<{ loginData: Login }>();

const loginError = ref<LoginError[]>([]);

const userStore = useUser();
const login = async () => {
  loginError.value = await userStore.login(props.loginData);
  console.log(loginError.value);
};

const loginErrorContent = (path) => {
  return path
    ? loginError.value?.find((item) => item.path[0] === path)?.message
    : console.log(loginError.value);
};

const isEmailValid = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    props.loginData.email
  );
});

const errorMessage = computed(() =>
  isEmailValid.value ? '' : 'Please enter a valid email.'
);

const buttonDisabled = computed((): boolean => {
  return !isEmailValid.value || props.loginData.password.length <= 8;
});
</script>

<style lang="scss" scoped>
.login-card {
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 4em;
  margin: 4em 0 6em;
  &__email {
    margin-bottom: 1.5em;
  }
  &__password {
    margin-bottom: 0.5em;
  }
  &__valid-flag {
    @include f-subtitle;
    font-weight: 500;
    color: $dark-1;
    opacity: 50%;
  }
  &__error {
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #cd2c2c;
  }
  &__buttons-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 2.5em;
  }
  &__link {
    padding-left: 0;
  }
}
</style>
