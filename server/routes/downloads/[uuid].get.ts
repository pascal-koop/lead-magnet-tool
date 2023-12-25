/* eslint-disable no-console */
export default defineEventHandler(async (event: any) => {
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const { uuid } = event.context!.params!;
  const url = `/items/files/${uuid}`;
  let fileInfo: any;
  try {
    fileInfo = await $fetch<any>(url, {
      baseURL: apiBaseUrl,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    if (!fileInfo.data) {
      return sendNoContent(event, 404);
    }
  } catch (error) {
    sendRedirect(event, '/404');
  }

  const fileId = fileInfo.data.file;
  const fileName = fileInfo.data.file_name;
  const downloadUrl = `${apiBaseUrl}/assets/${fileId}`;
  try {
    const response = await fetch(downloadUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    const contentType = response.headers.get('Content-Type');
    const contentLength = response.headers.get('Content-Length');

    setResponseHeaders(event, {
      'content-disposition': `attachment; filename="${fileName}"`,
      'Cache-Control': 'private, max-age=31536000',
      'Content-Type': contentType!,
      'Content-Length': contentLength!,
    });
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    sendRedirect(event, '/404');
  }
});
