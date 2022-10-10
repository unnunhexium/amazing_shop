interface Category {
  id: string;
  attributes: CategoryAttr;
}
interface CategoryAttr {
  name: string;
  slug: string;
  image: Image;
}
interface Image {
  data: {
    attributes: ImageAttrs;
  };
}
interface ImageAttrs {
  url: string;
}
