import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../redux/actions';
import './Login.css';

// uso do .test() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test //
// para validação de email: https://irias.com.br/blog/como-validar-email-e-senha-em-javascript/ //

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
      <div className="Login">
        <h1 className="Login__title">TrybeWallet</h1>
        <div className="Login__container">
          <form className="Login__form">
            <div className="Login__form-field">
              <input
                type="email"
                className="Login__form-input"
                data-testid="email-input"
                value={ email }
                placeholder="Email"
                onChange={ ({ target: { value } }) => this.setState({ email: value }) }
              />
            </div>
            <div className="Login__form-field">
              <input
                type="password"
                className="Login__form-input"
                data-testid="password-input"
                value={ password }
                placeholder="Senha"
                onChange={ ({ target: { value } }) => this.setState({ password: value }) }
              />
            </div>
            <div className="Login__form-field">
              <button
                type="button"
                className="Login__button"
                disabled={ !condition }
                onClick={ () => this.handleClick(email) }
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
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
