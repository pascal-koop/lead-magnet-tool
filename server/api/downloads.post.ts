/* eslint-disable no-console */
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const path = '/items/downloads';
  try {
    const response = await $fetch<any>(path, {
      baseURL: apiBaseUrl,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      body: {
        name: body.name,
        company: body.company,
        email: body.email,
        consent_data_processing: body.consentedDataProcessing,
        file_uuid: body.fileId,
      },
    });
    return response;
  } catch (error) {
    sendRedirect(event, '/404');
  }
});
