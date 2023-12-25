/* eslint-disable no-console */

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const path = `/items/files?filter[slug][_eq]=${body.slug}`;
  try {
    const { data } = await $fetch<any>(path, {
      baseURL: apiBaseUrl,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (data.length === 0) {
      return sendNoContent(event, 404);
    }
    return data[0];
  } catch (error) {
    console.log('error: ', error);
  }
});
