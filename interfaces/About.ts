interface About {
  id: string;
  attributes: CategoryAttr;
}
interface CategoryAttr {
  header: string;
  content: string;
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
