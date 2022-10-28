export interface Hero {
  id: string;
  attributes: HeroAttr;
}
export interface HeroAttr {
  flag: string;
  name: string;
  description: string;
  button_text: string;
  image: Image;
  product: Product;
}
export interface Image {
  data: {
    attributes: ImageAttrs;
  };
}
export interface ImageAttrs {
  url: string;
}
export interface Product {
  data: {
    id: string;
  };
}
