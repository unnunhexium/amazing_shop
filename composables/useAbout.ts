export default async () => {
  const about = ref<About>(null);
  async function fetchAbout() {
    const { data, pending, error } = await useLazyFetch<{ data: About }>(
      'http://localhost:1337/api/about-tile?populate=*'
    );
    about.value = data.value.data;
  }
  return { about, fetchAbout };
};
