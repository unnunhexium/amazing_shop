<template>
  <form novalidate @submit.prevent="" class="register-card">
    <BaseInput
      class="register-card__email"
      @update:modelValue="
        $emit('set-form-field', { value: $event, key: 'email' })
      "
      :modelValue="formData.email"
      type="email"
      placeholder="Please enter your email."
      :errorMessage="errorMessage"
      label="email"
    />
    <BaseInput
      class="register-card__password"
      @update:modelValue="
        $emit('set-form-field', { value: $event, key: 'password' })
      "
      :modelValue="formData.password"
      type="password"
      placeholder="Please enter your password."
      label="password"
    />
    <p
      class="register-card__valid-flag"
      :class="{ valid: containsEightChars, invalid: changeColor }"
    >
      At least 8 characters
    </p>
    <p
      class="register-card__valid-flag"
      :class="{ valid: containsLetter, invalid: changeColor }"
    >
      At least one letter
    </p>
    <p
      class="register-card__valid-flag"
      :class="{ valid: containsDigit, invalid: changeColor }"
    >
      At least one digit
    </p>
    <div class="register-card__buttons-wrapper">
      <BaseButton class="register-card__link" type="tertiary" :url="`/login`">
        Log in instead
      </BaseButton>
      <BaseButton
        class="register-card__button"
        type="primary"
        @click="$emit('go-to-next-step')"
        :disabled="buttonDisabled"
      >
        Next step
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Form from '@/interfaces/Form';

const validPassword = ref(false);
const validEmail = ref(false);
const obj = reactive({ emailError: '' });

const props = defineProps<{ formData: Form }>();

const isEmailValid = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    props.formData.email
  );
});

const errorMessage = computed(() =>
  isEmailValid.value ? '' : 'Please enter a valid email.'
);

const changeColor = computed((): boolean => {
  return props.formData.password.length >= 1;
});
const containsEightChars = computed((): boolean => {
  return !(
    props.formData.password === '' || props.formData.password.length < 8
  );
});
const containsDigit = computed((): boolean => {
  return /\d/.test(props.formData.password);
});
const containsLetter = computed((): boolean => {
  return /[A-Za-z]/.test(props.formData.password);
});
const buttonDisabled = computed((): boolean => {
  return !(
    isEmailValid.value &&
    containsEightChars.value &&
    containsDigit.value &&
    containsLetter.value
  );
});
</script>

<style lang="scss" scoped>
.register-card {
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
.invalid {
  color: #ae2727;
}
.valid {
  color: #27ae60;
}
</style>
