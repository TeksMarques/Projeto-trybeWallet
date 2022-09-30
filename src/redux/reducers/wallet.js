// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, LOADING } from '../actions';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
};

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, loading: false };
  default:
    return state;
  }
}

export default currency;
