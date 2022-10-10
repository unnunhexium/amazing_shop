export default async () => {
  const products = ref<Product[]>([]);
  async function fetchProducts(id: string | number) {
    const { data, pending, error } = await useFetch<{ data: Product[] }>(
      'http://localhost:1337/api/products?populate=image'
    );
    products.value = data.value.data;
  }
  return { products, fetchProducts };
};
