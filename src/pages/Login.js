import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleClick = (email) => {
    const { getUserEmail, history } = this.props;
    getUserEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;

    const usuario = /\S+[@]\w+[.]\w+/gm;
    const min = 6;
    const condition = (usuario.test(email) && password.length >= min);
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ ({ target: { value } }) => this.setState({ email: value }) }
        />

        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target: { value } }) => this.setState({ password: value }) }
        />

        <button
          type="button"
          disabled={ !condition }
          onClick={ () => this.handleClick(email) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserEmail: (email) => dispatch(getUser(email)),
});

Login.propTypes = {
  getUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
