import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, PropTypes } from 'prop-types';
import { getCurrencies } from '../redux/actions';
import './WalletForm.css';

class WalletForm extends React.Component {
  state = {
    despesas: 0,
    descricao: '',
  };

  componentDidMount() {
    this.getApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getApi = async () => {
    const { dispatch } = this.props;
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const moedas = await fetch(url);
    const json = await moedas.json();
    const moedasAll = Object.keys(json);
    const currencies = moedasAll.filter((moeda) => moeda !== 'USDT');
    dispatch(getCurrencies(currencies));
  };

  render() {
    const { despesas, descricao } = this.state;
    const { currencies } = this.props;

    return (
      <div className="WalletForm">
        <div className="WalletForm__container">
          <input
            data-testid="value-input"
            type="number"
            placeholder="Despesas"
            required
            name="despesas"
            value={ despesas }
            onChange={ this.handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            placeholder="Despesas"
            required
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }
          />
          <select data-testid="currency-input">
            {
              currencies.map((moeda) => (
                <option value={ moeda } key={ moeda }>{moeda}</option>
              ))
            }
          </select>
          <select data-testid="method-input">
            <option value="Dinheiro" name="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" name="Cartão de crédito">
              Cartão de crédito
            </option>
            <option value="Cartão de débito" name="Cartão de débito">
              Cartão de débito
            </option>
          </select>
          <select data-testid="tag-input">
            <option name="Alimentação" value="Alimentação">Alimentação</option>
            <option name="Lazer" value="Lazer">Lazer</option>
            <option name="Transporte" value="Transporte">Transporte</option>
            <option name="Saúde" value="Saúde">Saúde</option>
            <option name="Trabalho" value="Trabalho">Trabalho</option>
          </select>
        </div>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: arrayOf(string).isRequired,
};

const mapStateToProps = ({ wallet:
  { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps)(WalletForm);
