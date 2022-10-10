export default async () => {
  const hero = ref<Hero>(null);
  async function fetchHero() {
    const { data, pending, error } = await useFetch<{ data: Hero }>(
      'http://localhost:1337/api/the-hero?populate=*'
    );
    hero.value = data.value.data;
  }
  return { hero, fetchHero };
};
