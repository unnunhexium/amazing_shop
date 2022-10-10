interface Hero {
  id: string;
  attributes: HeroAttr;
}
interface HeroAttr {
  subheader: string;
  header: string;
  content: string;
  button_text: string;
  image: Image;
  product: Product;
}
interface Image {
  data: {
    attributes: ImageAttrs;
  };
}
interface ImageAttrs {
  url: string;
}
interface Product {
  data: {
    id: string;
  };
}
