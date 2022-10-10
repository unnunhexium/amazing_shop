export default async () => {
  const categories = ref<Category[]>([]);
  async function fetchCategories() {
    const { data, pending, error } = await useFetch<{ data: Category[] }>(
      'http://localhost:1337/api/categories?populate=image'
    );
    categories.value = data.value.data;
  }
  return { categories, fetchCategories };
};
