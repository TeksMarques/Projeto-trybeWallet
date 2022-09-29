// Coloque aqui suas actions
export const GET_USER = 'GET_USER';

export const getUser = (email) => ({
  type: GET_USER,
  email,
});
