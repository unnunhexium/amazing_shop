import { defineStore } from 'pinia';

interface Category {
  id: string;
  attributes: CategoryAttr;
}

interface CategoryAttr {
  name: string;
  slug: string;
}

export const useCategoriesStore = defineStore({
  id: 'cat-store',
  state: () => {
    return { categories: [] as Category[] };
  },
});
