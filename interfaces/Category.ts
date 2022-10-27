import { Product } from '@/interfaces/Product';

export default interface Category {
  id: string;
  attributes: CategoryAttr;
}
interface CategoryAttr {
  name: string;
  slug: string;
  image: Image;
  products: { data: Product[] };
}
interface Image {
  data: {
    attributes: ImageAttrs;
  };
}
interface ImageAttrs {
  url: string;
}
