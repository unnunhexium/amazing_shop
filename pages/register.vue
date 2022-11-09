<template>
  <div class="register-page">
    <div class="register-page__wrapper">
      <h1 class="register-page__header">Create</h1>
      <h1 class="register-page__header--color">a new account</h1>
      <RegisterCard
        v-if="!secondStepActive"
        :formData="formData"
        @set-form-field="setFormField"
        @go-to-next-step="secondStepActive = true"
      />
      <Register2ndCard
        v-else
        :formData="formData"
        :privacy-policy="privacyPolicy"
        @set-form-field="setFormField"
        @set-checkbox-value="setCheckboxValue"
        @register-user="userStore.register(formData)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';

const secondStepActive = ref(false);
const privacyPolicy = ref(false);
const formData = reactive({
  email: '',
  password: '',
  name: '',
  surname: '',
  dateOfBirth: new Date(),
});

function setFormField({ value, key }) {
  formData[key] = value;
}

function setCheckboxValue() {
  privacyPolicy.value = !privacyPolicy.value;
}

const userStore = useUser();
</script>

<style lang="scss" scoped>
.register-page {
  &__wrapper {
    max-width: 624px;
    margin: 0 auto;
  }
  &__header {
    @include f-h1;
    padding-top: 1em;

    &--color {
      @include f-h1;
      color: $color-1;
    }
  }
}
</style>
