interface Product {
  id: string;
  attributes: ProductAttr;
}
interface ProductAttr {
  name: string;
  description: string;
  price: number;
  features: string;
  slug: string;
  image: Image;
}
interface Image {
  id: number;
  attributes: ImageAttrs;
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
