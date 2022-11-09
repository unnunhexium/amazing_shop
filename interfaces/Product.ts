export interface Product {
  id: number;
  attributes: ProductAttr;
}
export interface ProductAttr {
  flag: string;
  name: string;
  name_short?: string;
  description?: string;
  price?: number;
  features?: string;
  slug?: string;
  image: Image;
  large_image?: Image;
  small_image_1?: Image;
  small_image_2?: Image;
  id?: number;
  product_items?: ProductItems;
}
export interface ProductItems {
  data: {
    id: number;
    quantity: string;
    name: string;
  };
}
export interface Image {
  id: number;
  data: {
    attributes: ImageAttrs;
  };
}
export interface ImageAttrs {
  url: string;
  formats: {
    thumbnail: Thumbnail;
    small: Thumbnail;
  };
}
export interface Thumbnail {
  name: string;
  url: string;
}
