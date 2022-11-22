<template>
  <form
    class="register-2nd-card"
    novalidate
    @submit.prevent="$emit('register-user')"
  >
    <BaseInput
      class="register-2nd-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'name',
        })
      "
      :modelValue="formData.name"
      type="text"
      placeholder="e.g. Jessica"
      label="Name"
      labelPrimary
    />
    <BaseInput
      class="register-2nd-card__input"
      @update:modelValue="
        $emit('set-form-field', {
          value: capitalizeFirstLetter($event),
          key: 'surname',
        })
      "
      :modelValue="formData.surname"
      type="text"
      placeholder="e.g. Jones"
      label="Surname"
      labelPrimary
    />
    <label class="register-2nd-card__input--label">Date of birth</label>
    <Datepicker
      class="register-2nd-card__input--date"
      @update:modelValue="
        $emit('set-form-field', {
          value: $event,
          key: 'dateOfBirth',
        })
      "
      :modelValue="formData.dateOfBirth"
      :enableTimePicker="false"
      format="dd/MM/yyyy"
    />
    <p
      class="register-2nd-card__valid-flag"
      v-if="!isOver18 && formData.dateOfBirth"
    >
      You should be minium 18 years old.
    </p>
    <label class="register-2nd-card__checkbox">
      <input
        type="checkbox"
        class="register-2nd-card__checkbox-input"
        @input="
          $emit('set-checkbox-value', {
            value: ($event.target as HTMLInputElement).value,
          })
        "
        :modelValue="privacyPolicy"
      />
      I agree to
      <a url="/" class="register-2nd-card__link">Privacy Policy.</a>
    </label>
    <div class="register-2nd-card__buttons-wrapper">
      <BaseButton
        class="register-2nd-card__link"
        type="tertiary"
        :url="`/login`"
      >
        Log in instead
      </BaseButton>
      <BaseButton
        class="register-2nd-card__button"
        type="primary"
        :disabled="buttonDisabled"
      >
        Register
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import Form from '@/interfaces/Form';
import Datepicker from '@vuepic/vue-datepicker';

const props = defineProps<{ formData: Form; privacyPolicy: boolean }>();

const attrs = reactive([
  {
    key: 'today',
    highlight: 'grey',
    dates: new Date(),
  },
]);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const isOver18 = computed(() => {
  if (!props.formData.dateOfBirth) return;
  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
  return (
    new Date(props.formData.dateOfBirth).getTime() <= date18YearsAgo.getTime()
  );
});

const buttonDisabled = computed((): boolean => {
  return !(
    isOver18.value &&
    props.formData.name.length >= 2 &&
    props.formData.surname.length >= 2 &&
    props.privacyPolicy
  );
});
</script>

<style lang="scss" scoped>
.register-2nd-card {
  border-radius: 12px;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  padding: 4em;
  margin: 4em 0 6em;
  &__input--label {
    @include f-content;
    color: $color-1;
    text-transform: uppercase;
  }
  &__input--date {
    margin: 6px 0 6px;
  }
  &__valid-flag {
    opacity: 50%;
    color: #ae2727;
  }
  &__valid-flag,
  &__checkbox {
    @include f-subtitle;
    font-weight: 500;
    color: $dark-1;
    padding-bottom: 24px;
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
:deep() {
  .dp__pointer {
    border-radius: 8px;
    margin: 6px 0 6px;
    padding: 10px 0 10px 40px;
    font-family: Arial;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    border-color: $grey-1;
  }
}
</style>
