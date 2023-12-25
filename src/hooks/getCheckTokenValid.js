import { instance } from '.';

export const getCheckTokenValid = async () => {
  try {
    const response = await instance.get(`/users/token-check`);
    if (response) return response.data?.message;
  } catch (error) {
    console.error('Token is not valid:', error);
  }
};
