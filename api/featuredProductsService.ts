import { FeaturedProduct } from '@/interfaces/FeaturedProduct';

export const getFeaturedProducts = async (size) => {
  const { data } = await useLazyFetch<FeaturedProduct>(
    `http://localhost:1337/api/featured-product-tile-${size}?populate=*`
  );

  return data.value;
};
