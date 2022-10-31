import { Product } from '@/interfaces/Product';

const products = ref<Product[]>([]);

export default () => {
  async function fetchProducts() {
    const { data } = await useApi<{ data: Product[] }>(
      'products?populate=image'
    );
    products.value = data;
  }
  return { products, fetchProducts };
};
