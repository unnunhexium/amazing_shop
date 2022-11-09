import { defineStore } from 'pinia';
import { Cart } from '@/interfaces/Cart';
import { Product } from '@/interfaces/Product';
import { DisplayCart } from '@/interfaces/DisplayCart';

interface State {
  cart: Cart | {};
  displayCart: DisplayCart[] | [];
}

export const useCartStore = defineStore('cart', {
  state: () => {
    return { cart: {}, displayCart: [] } as State;
  },
  actions: {
    async loadCartInstance() {
      const cs = localStorage.getItem('cart');
      if (!cs) this.cart = {};
      else this.cart = JSON.parse(cs);
    },
    addToCart(product: { id: number; qty: number }) {
      const cs = localStorage.getItem('cart');
      const uuid = crypto.randomUUID();

      let isAdded = false;

      if (!cs) this.cart = { cid: uuid, products: [product] };
      else {
        let cartLocalStorage = JSON.parse(cs);
        cartLocalStorage.products = cartLocalStorage.products.map((item) => {
          if (item.id == product.id) {
            isAdded = true;
            return { id: item.id, qty: item.qty + 1 };
          }
          return { id: item.id, qty: item.qty };
        });
        if (!isAdded)
          cartLocalStorage.products.push({ id: product.id, qty: product.qty });
        this.cart = cartLocalStorage;
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    removeFromCart(id: number) {
      this.cart.products = this.cart.products.filter((item) => item.id != id);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    async getCartItems() {
      const promises = [];
      this.cart.products.forEach((product) => {
        promises.push(
          $fetch(`http://localhost:1337/api/products/${product.id}?populate=*`)
        );
      });
      const data = await Promise.all(promises);
      const cart = data.map((item) => {
        const { qty } = this.cart.products.find(
          (product) => product.id == item.data.id
        );
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
});
