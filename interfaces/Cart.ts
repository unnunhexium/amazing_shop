export interface Cart {
  cid: string;
  products: Array<{ id: number; qty: number }>;
}
