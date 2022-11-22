import { defineStore } from 'pinia';
import { Cart } from '@/interfaces/Cart';
import { Product } from '@/interfaces/Product';

interface State {
  cart: Cart[];
  displayCart: Product[];
}

export const useCartStore = defineStore('cart', {
  state: () => {
    return { cart: [], displayCart: [] } as State;
  },
  actions: {
    async addToCart(id: number, qty: number) {
      if (this.cart.findIndex((item) => item.id === id) < 0) {
        this.cart = [...this.cart, { id, qty }];
        const { data: product } = await useApi<{ data: Product }>(
          `products/${id}?populate=*`
        );
        this.displayCart = [...this.displayCart, { ...product, qty }];
      } else {
        this.cart = this.cart.map((item) => {
          return item.id == id ? { ...item, qty: item.qty + qty } : item;
        });
        this.displayCart = this.displayCart.map((item) => {
          return item.id == id ? { ...item, qty: item.qty + qty } : item;
        });
      }
    },
    removeOneItem(id: number) {
      const itemToBeRemoved = this.cart.find((item) => item.id === id);
      if (itemToBeRemoved.qty === 1) {
        this.cart = this.cart.filter((item) => item.id != id);
        this.displayCart = this.displayCart.filter((item) => item.id != id);
      } else {
        this.cart = this.cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
        this.displayCart = this.displayCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },
    removeAllItems() {
      this.cart = [];
      this.displayCart = [];
    },
    async getCartItems() {
      const promises = [];
      if (this.cart.length === 0) {
        return;
      }
      this.cart.forEach((product) => {
        promises.push(
          $fetch(`http://localhost:1337/api/products/${product.id}?populate=*`)
        );
      });
      const data = await Promise.all(promises);
      const cart = data.map((item) => {
        const { qty } = this.cart.find((product) => product.id == item.data.id);
        return { ...item.data, qty };
      });

      this.displayCart = cart;
    },
  },
  getters: {
    cartData: (state) =>
      state.displayCart.map((item) => ({
        id: item.id,
        image: item.attributes.image.data.attributes.url,
        name: item.attributes.name,
        name_short: item.attributes.name_short,
        price: item.attributes.price,
        qty: item.qty,
      })),
  },
  persist: true,
});
