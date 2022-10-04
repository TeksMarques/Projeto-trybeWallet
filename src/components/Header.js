import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes, arrayOf, shape } from 'prop-types';
import './Header.css';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    const inicio = expenses.map((m) => m.value * m.exchangeRates[m.currency].ask);
    const final = inicio.reduce((acc, curr) => acc + curr, 0);
    const total = final.toFixed(2);

    return (
      <div className="Header">
        <div className="Header__user header-info">
          <p data-testid="email-field">
            <span>Email: </span>
            {email}
          </p>
        </div>
        <div className="Header__user header-info">
          <p data-testid="total-field">
            {total}
          </p>
        </div>
        <div className="Header__user header-info">
          <p data-testid="header-currency-field">
            <span>Moeda: </span>
            {currency}
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: arrayOf(shape()),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
