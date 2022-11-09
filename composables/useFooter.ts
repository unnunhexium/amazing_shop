export default async () => {
  const footer = ref<Footer>(null);
  async function fetchFooter() {
    const { data, pending, error } = await useLazyFetch<{ data: Footer }>(
      'http://localhost:1337/api/the-footer?populate=*'
    );
    footer.value = data.value?.data;
  }
  return { footer, fetchFooter };
};
