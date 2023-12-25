<script setup lang="ts">
const filePreview: any = await useFetchPreview();
if (!filePreview.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found / Seite nicht gefunden',
  });
}

const fetchingMessage = ref<string>('')
const showButton = ref<boolean>(true);
const fileId: string = filePreview.value.id;

const contactInput = ref<ContactInput>({
  name: null,
  email: '',
  company: null,
  consentedDataProcessing: false,
});

const sendContactForm = async () => {
  fetchingMessage.value = await useSubmitPersonalInformationForm(contactInput.value, fileId);
  if(fetchingMessage.value === 'success') {
    showButton.value = false;
 }
};

const showAppointmentFetchingSuccess = computed(() => fetchingMessage.value === 'success');
const showAppointmentFetchingError = computed(() => {
  if (fetchingMessage.value === 'error') {
    showButton.value = false;
    return true;
  }
});

const emailNotValid = computed(() => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (
    contactInput.value.email === null ||
    contactInput.value.email === '' ||
    !pattern.test(contactInput.value.email.toString())
  ) {
    return true;
  } else {
    return false;
  }
});

const requiredFieldsEmpty = computed(() => {
  if (
    contactInput.value.email === '' ||
    contactInput.value.consentedDataProcessing === false ||
    contactInput.value.consentedDataProcessing === null
  ) {
    return true;
  } else {
    return false;
  }
});

const formHasErrors = computed(() => {
  return requiredFieldsEmpty.value || emailNotValid.value ? true : false;
});
</script>

<style></style>

<template>
  <NuxtLayout>
    <DownloadPreview
      :title="filePreview.title"
      :subtitle="filePreview.subtitle"
      :preview-image="filePreview.image"
    />
    <PersonalInformationForm
      v-model:company="contactInput.company"
      v-model:email="contactInput.email"
      v-model:name="contactInput.name"
      v-model:consentedDataProcessing="contactInput.consentedDataProcessing"
      :required-fields-empty="requiredFieldsEmpty"
      :email-not-valid="emailNotValid"
      :form-has-errors="formHasErrors"
      :show-button="showButton"
      :fetching-status-success="showAppointmentFetchingSuccess"
      :fetching-status-error="showAppointmentFetchingError"
      @submit="sendContactForm"
    />
  </NuxtLayout>
</template>
