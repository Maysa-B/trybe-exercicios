import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newClient } from "../redux/actions";

class Cadastro extends React.Component {
  state = {
    name: '',
    email: '',
    age: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = () => {
    const { newClient } = this.props;
    newClient(this.state);
    this.setState({ name: '', email: '', age: ''})
  }

  render() {
    const {name, email, age} = this.state;

    return (
      <section>
        <form>
          <input
            name="name"
            onChange={ this.handleChange }
            value={ name }
            placeholder="Nome"
            type="text"
          />
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            type="email"
          />
          <input
            name="age"
            value={ age }
            onChange={ this.handleChange }
            placeholder="Idade"
            type="number"
          />
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Cadastrar
          </button>
        </form>
        <Link to="/clientes-cadastrados">Ir para clientes cadastrados</Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newClient: (dados) => dispatch(newClient(dados))
})

export default connect(null, mapDispatchToProps)(Cadastro);