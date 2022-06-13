import React from "react";
import { connect } from 'react-redux';
import { validationAction } from "../redux/actions";

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isDisabled: true,
  }

  ableOrDisable = () => {
    const { email, senha } = this.state;
    if (email.length > 5 && senha.length > 5) {
      this.setState({isDisabled: false});
    }
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value}, () => this.ableOrDisable());
  }

  handleClick = () => {
    const { history, atualizeLogin } = this.props;
    this.setState({email: '', senha: '', isDisabled: true});
    atualizeLogin();
    history.push("/clientes-cadastrados");
  }

  render() {
    const { email, senha, isDisabled } = this.state;

    return (
      <section>
        <form>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={ email }
            placeholder="Email"
          />
          <input
            name="senha"
            onChange={this.handleChange}
            type="password"
            value={ senha }
            placeholder="Senha"
          />
          <button
            disabled={ isDisabled }
            onClick={ this.handleClick }
            >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  atualizeLogin: () => dispatch(validationAction),
})

export default connect(null, mapDispatchToProps)(Login);