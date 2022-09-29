import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    valor: 0,
    currency: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { valor, currency } = this.state;

    return (
      <header>
        <div>
          <p data-testid="email-field">{email}</p>
        </div>
        <div>
          <p data-testid="total-field">{valor}</p>
        </div>
        <div>
          <p data-testid="header-currency-field">{currency}</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
