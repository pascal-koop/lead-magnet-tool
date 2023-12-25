export const useFetchPreview = async () => {
  const route = useRoute();
  const slug = route.params.slug;

  const { data, status } = await useFetch('/api/preview', {
    method: 'POST',
    body: {
      slug,
    },
  });

  if (status.value === 'error') {
    return {};
  }

  return data;
};
