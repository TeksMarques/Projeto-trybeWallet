import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';
import './Table.css';

class Table extends Component {
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
            {
              expenses.map((d) => (
                <tr key={ d.id }>
                  <td className="cell">{ d.description }</td>
                  <td className="cell">{ d.tag }</td>
                  <td className="cell">{ d.method }</td>
                  <td className="cell">{Number(d.value).toFixed(2)}</td>
                  <td className="cell">{ d.exchangeRates[d.currency].name}</td>
                  <td className="cell">
                    {Number(d.exchangeRates[d.currency].ask).toFixed(2)}
                  </td>
                  <td className="cell">
                    {Number((d.value * d.exchangeRates[d.currency].ask).toFixed(2))}
                  </td>
                  <td className="cell">Real</td>
                  <td className="cell">
                    <button type="button">Editar</button>
                    <button type="button">Excluir</button>
                  </td>
                </tr>
              ))
            }
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
