import { FeaturedProduct } from '@/interfaces/FeaturedProduct';

export const getFeaturedProducts = async (size) => {
  const { data } = await useFetch<FeaturedProduct>(
    `http://localhost:1337/api/featured-product-tile-${size}?populate=*`
  );

  return data.value;
};

//  `http://localhost:1337/api/featured-product-tile-${size}?populate=*`

// export default async () => {
//   const featuredProduct = ref<FeaturedProduct>(null);
//   async function fetchFeaturedProduct() {
//     const { data, pending, error } = await useFetch<{
//       data: FeaturedProduct;
//     }>('http://localhost:1337/api/featured-product-tile-large?populate=*');
//     featuredProduct.value = data.value.data;
//   }
//   return { featuredProduct, fetchFeaturedProduct };
// };
