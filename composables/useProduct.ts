import { Product } from '@/interfaces/Product';

export default async () => {
  const product = ref<Product>();
  async function fetchProduct(id: string | number) {
    const { data, pending, error } = await useLazyFetch<{ data: Product }>(
      `http://localhost:1337/api/products/${id}?populate=*`
    );
    product.value = data.value.data;
  }
  return { product, fetchProduct };
};
