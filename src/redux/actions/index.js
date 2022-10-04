// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const LOADING = 'LOADING';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getUser = (email) => ({
  type: GET_USER,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  expenses,
});

export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});
