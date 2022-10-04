import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';
import './Table.css';
import { deleteExpense } from '../redux/actions';

class Table extends Component {
  apagarDespesa = (id) => {
    const { dispatch, expenses } = this.props;
    const removeItem = expenses.filter((expense) => (
      expense.id !== id
    ));
    dispatch(deleteExpense(removeItem));
    console.log(removeItem, 'aqui');
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="Table">
        <table className="Table__header">
          <thead>
            <tr>
              <th className="cell">Descrição</th>
              <th className="cell">Tag</th>
              <th className="cell">Método de pagamento</th>
              <th className="cell">Valor</th>
              <th className="cell">Moeda</th>
              <th className="cell">Câmbio utilizado</th>
              <th className="cell">Valor convertido</th>
              <th className="cell">Moeda de conversão</th>
              <th className="cell">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={ e.id }>
                <td className="cell">{e.description}</td>
                <td className="cell">{e.tag}</td>
                <td className="cell">{e.method}</td>
                <td className="cell">{Number(e.value).toFixed(2)}</td>
                <td className="cell">{e.exchangeRates[e.currency].name}</td>
                <td className="cell">
                  {Number(e.exchangeRates[e.currency].ask).toFixed(2)}
                </td>
                <td className="cell">
                  {Number((e.value * e.exchangeRates[e.currency].ask)).toFixed(2)}
                </td>
                <td className="cell">Real</td>
                <td className="cell">
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.apagarDespesa(e.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: arrayOf(shape()),
}.isRequired;

export default connect(mapStateToProps)(Table);
