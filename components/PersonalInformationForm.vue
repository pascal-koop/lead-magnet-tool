<script setup>
const props = defineProps([
  'name',
  'email',
  'company',
  'consentedDataProcessing',
  'requiredFieldsEmpty',
  'emailNotValid',
  'formHasErrors',
  'showButton',
  'fetchingStatusSuccess',
  'fetchingStatusError',
]);

defineEmits([
  'update:name',
  'update:email',
  'update:company',
  'update:consentedDataProcessing',
  'submit'
]);

const showEmailValidationError = computed(() => {
  if (props.email === '' || props.email === null) return false;
  return props.emailNotValid ? true : false;
});
</script>

<style></style>

<template>
  <form>
    <div class="personal-information-form">
      <div class="personal-information-form-inner">
        <h2 class="personal-information-title">Ihre Kontaktdaten</h2>
        <div class="input-name">
          <label class="personal-information-label" for="name"> Name </label>
          <input
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="personal-information-input"
            type="text"
            id="name"
          />
        </div>
        <div class="input-email">
          <label class="personal-information-label" for="email"> E-Mail<span class="input-required">*</span> </label>
          <input
            :value="email"
            @input="$emit('update:email', $event.target.value)"
            class="personal-information-input"
            type="email"
            id="email"
            required
          />
          <span class="email-error-msg" v-if="showEmailValidationError">
            Bitte gebe eine valide E-Mail-Adresse ein!
          </span>
        </div>
        <div class="input-company">
          <label class="personal-information-label" for="company"> Unternehmen </label>
          <input
            :value="company"
            @input="$emit('update:company', $event.target.value)"
            class="personal-information-input"
            type="text"
            id="company"
          />
        </div>
        <div class="data-processing-checkbox">
          <input
            :value="consentedDataProcessing"
            @input="$emit('update:consentedDataProcessing', $event.target.checked)"
            class="personal-information-input"
            type="checkbox"
            id="data-processing"
            required
          />
          <div class="outer-data-processing-svg">
            <svg class="inner-data-processing-svg" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#009dd9" fill-rule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <label for="data-processing">
            <p class="data-processing-content">
              Ich stimme zu, dass meine Angaben aus dem Formular erhoben und verarbeitet werden.<span
                class="input-required"
                >*</span
              >
            </p>
          </label>
        </div>
        <div class="data-processing-information">
          <p class="data-processing-information-content">
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in unserer
            <a
              class="data-processing-information-content-link"
              href="https://www.example.com/de/datenschutzerklaerung/"
              target="_blank"
            >
              Datenschutzerklärung
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="send-button">
      <button
        @click.prevent="$emit('submit')"
        :disabled="props.formHasErrors"
        v-if="props.showButton"
        class="send-button-content"
      >
        <span class="button-title">Absenden</span>
      </button>
    </div>
    <div v-if="props.fetchingStatusSuccess" class="fetch-success-messages">
      <p class="fetch-success-msg-1">Vielen Dank für Ihr Interesse.</p>
      <p class="fetch-success-msg-2">Sie erhalten in Kürze eine E-Mail mit dem Downloadlink.</p>
    </div>
    <p class="fetch-error-msg" v-if="props.fetchingStatusError">
      Leider gab es einen Fehler. Bitte versuchen Sie es später nochmal.
    </p>
  </form>
</template>
