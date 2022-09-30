import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class WalletForm extends Component {
  state = {
    moedas: [],
  };

  componentDidMount() {
    this.handleApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleApi = async () => {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await api.json();
    const coin = Object.keys(result);
    const filtro = coin.filter((moeda) => moeda !== 'USDT');
    this.setState({
      moedas: filtro,
    });
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="number"
            data-testid="value-input"
          />
        </div>
        <div>
          <input
            type="text"
            data-testid="description-input"
          />
        </div>
        <div>
          <select name="moedas" data-testid="currency-input">
            {
              moedas.map((moeda) => (
                <option value={ moeda } key="moeda">{moeda}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select name="pagamento" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </div>
        <div>
          <select name="tipo" data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </div>
      </form>
    );
  }
}

export default WalletForm;
