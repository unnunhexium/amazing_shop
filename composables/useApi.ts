import { useUser } from '@/store/user';

const baseUrl = 'http://localhost:1337/api/';

export default async <T>(url, options = {}) => {
  const userStore = useUser();
  try {
    return await $fetch<T>(`${baseUrl}${url}`, {
      headers: {
        ...(userStore.token && { Authorization: `Bearer ${userStore.token}` }),
      },
      ...options,
    });
  } catch (error) {
    if (error?.response?.status === 401) console.log(error);
  }
};
