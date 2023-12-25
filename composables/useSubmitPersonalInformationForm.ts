export const useSubmitPersonalInformationForm = async (data: ContactInput, fileId: string) => {
  try {
    const { status } = await useFetch('/api/downloads', {
      method: 'POST',
      body: {
        name: data.name,
        company: data.company,
        email: data.email,
        consent_data_processing: data.consentedDataProcessing,
        fileId: fileId,
      },
    });
    return status.value;
  } catch (error) {
    navigateTo('/404');
    return error;
  }
};
