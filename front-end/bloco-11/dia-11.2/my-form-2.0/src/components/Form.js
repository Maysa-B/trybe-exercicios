import React from "react";
import LastJob from "./LastJob";
import PersonalData from "./PersonalData";
import Sent from "./Sent";

class Form extends React.Component {

  state = {
    name: '',
    email: '',
    CPF: '',
    endereço: '',
    cidade: '',
    estado: '',
    casapartamento: '',
    resumo: '',
    cargo: '',
    descrição: '',
    sent: false
  }

  validateAdress = (address) => address.replace(/[^\w\s]/gi, '');

  exibiu = false;

  handleAlert = () => {
    if (this.exibiu === false) alert('Preencha com cuidado esta informação.');
    this.exibiu = true;
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    let retorno = name === 'name' ? value.toUpperCase() : value;

    if (name === 'casapartamento') retorno = target.id;

    if (name === 'endereço') {
      retorno = this.validateAdress(value);
    }

    this.setState({ [name]: retorno })
  }

  handleCityName = ({ target }) => {
    const { value } = target;
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((curr) => {
      if (value.startsWith(curr) === true) {
        this.setState({ cidade: '' });
      }
    })
  }

  handleSend = () => {
    this.setState({ sent: true})    
  }

  handleClear = () => {
    this.setState({
      name: '',
      email: '',
      CPF: '',
      endereço: '',
      cidade: '',
      estado: '',
      casapartamento: '',
      resumo: '',
      cargo: '',
      descrição: '',
      sent: false
    })
  }

  render() {

    const { name, email, CPF, endereço, cidade, resumo, casapartamento, cargo, sent, descrição } = this.state;

    return (
      <>
        <form>
          <PersonalData
            name={name} email={email} cpf={CPF} endereço={endereço} cidade={cidade}
            handleCityName={this.handleCityName} handleInputChange={this.handleInputChange}
          />
          <LastJob
            resumo={resumo} cargo={cargo} descrição={descrição}
            handleInputChange={this.handleInputChange} handleAlert={this.handleAlert}
          />
        </form>
        <section>
          <button onClick={this.handleSend}>Send</button>
          <button onClick={this.handleClear}>Clear</button>
        </section>
        {sent === true? (<Sent name={name} email={email} cpf={CPF} endereço={endereço} cidade={cidade} resumo={resumo} cargo={cargo} casapartamento={casapartamento} descrição={descrição}/>) : ''}
      </>
    )
  }
}

export default Form;