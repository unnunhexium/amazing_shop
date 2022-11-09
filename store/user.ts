import { defineStore } from 'pinia';
import Form from '@/interfaces/Form';
import Login from '@/interfaces/Login';

const baseUrl = 'http://localhost:1337/api';

export const useUser = defineStore({
  id: 'users',
  state: () => ({
    token: '',
  }),
  actions: {
    async register(formData) {
      await useApi<{ data: Form }>('auth/local/register', {
        method: 'POST',
        body: {
          ...formData,
          username: `${formData.name}${formData.surname}`,
        },
      });
      await navigateTo({ path: '/login' });
    },
    async login(loginData) {
      try {
        const data = await useApi<{ data: Login; error; jwt: string }>(
          'auth/local',
          {
            method: 'POST',
            body: {
              identifier: loginData.email,
              password: loginData.password,
            },
          }
        );
        this.token = data.jwt;
        const router = useRouter();
        router.back();
      } catch (error) {
        console.error(error.response);
        return error.response._data.error.details.errors;
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      navigateTo({ path: '/login' });
    },
  },
  persist: true,
});
