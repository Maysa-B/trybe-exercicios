import React from "react";

class Sent extends React.Component {
  render() {

    const { name, email, cpf, endereço, cidade, resumo, cargo, descrição, casapartamento } = this.props;

    return(
      <div>
        <h3>Pessoal</h3>
        <p>Nome: { name }</p>
        <p>Email: { email }</p>
        <p>CPF: { cpf }</p>
        <p>Cidade: { cidade }</p>
        <p>Endereço: { endereço }</p>
        <p>Residência: { casapartamento }</p>
        <h3>Profissional</h3>
        <p>Resumo: { resumo }</p>
        <p>Cargo: { cargo }</p>
        <p>Descrição: { descrição }</p>
      </div>
    )
  }
}

export default Sent;