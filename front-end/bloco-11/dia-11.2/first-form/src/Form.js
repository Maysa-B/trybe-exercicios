import React from "react";
import AgeInput from "./AgeInput";
import Name from "./Name";

class Form extends React.Component {
  state = {
    nameInput: '',
    ageInput: 0,
    favoriteColor: '',
    textInput: '',
    doYouCode: false,
    formularioComErros: false
  }

  handleInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  handleError = (situation) => {
    this.setState({ formularioComErros: situation })
  }

  render() {
    return (
      <form>
        <label>
          Escolha sua cor favorita:
          <select name="favoriteColor" onChange={this.handleInputChange} value={this.state.favoriteColor}>
            <option>Azul</option>
            <option>Vermelho</option>
            <option>Preto</option>
          </select>
        </label>
        <AgeInput value={this.state.ageInput} handleError={this.handleError} handleChange={this.handleInputChange}/>
        <Name handleError={this.handleError} value={this.state.nameInput} handleChange={this.handleInputChange}/>
        <label>
          Escreva sobre você:
          <textarea name="textInput" onChange={this.handleInputChange} value={this.state.textInput}></textarea>
        </label>
        <fieldset>
          Você está estudando programção?
          <input name="doYouCode" onChange={this.handleInputChange} checked={this.state.doYouCode} type="checkbox"></input>
        </fieldset>
        <fieldset>
          Selecione sua foto:
          <input type="file" />
        </fieldset>
      </form>)
  }
}

export default Form;