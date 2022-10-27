import Category from '@/interfaces/Category';

const categories = ref<Category[]>([]);

export default async () => {
  async function fetchCategories() {
    const { data } = await useApi<{ data: Category[] }>(
      'categories?populate=image'
    );
    categories.value = data;
  }
  return { categories, fetchCategories };
};
