export interface Product {
  id: string;
  attributes: ProductAttr;
}
interface ProductAttr {
  flag: string;
  name: string;
  description?: string;
  price?: number;
  features?: string;
  slug?: string;
  image: Image;
  id?: string;
}
interface Image {
  id: number;
  data: {
    attributes: ImageAttrs;
  };
}
interface ImageAttrs {
  url: string;
  formats: {
    thumbnail: Thumbnail;
    small: Thumbnail;
  };
}
interface Thumbnail {
  name: string;
  url: string;
}
