export interface FeaturedProduct {
  id: string;
  attributes: FeaturedProductAttr;
}
export interface FeaturedProductAttr {
  header: string;
  content: string;
  button_text: string;
  image: Image;
}
export interface Image {
  data: {
    attributes: ImageAttrs;
  };
}
export interface ImageAttrs {
  url: string;
}
