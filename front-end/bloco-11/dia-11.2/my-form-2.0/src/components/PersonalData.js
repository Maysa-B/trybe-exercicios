import React from "react";
const estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

// campos:
// prontos✅: nome, email, cpf, cidade, texto, estado, tipo
// pendentes❌: 

class PersonalData extends React.Component {

  render() {

    const { name, email, cpf, endereço, cidade, handleCityName, handleInputChange } = this.props;

    return (
      <fieldset>
        Dados pessoais
        <input onChange={handleInputChange} type="text" name="name" placeholder="Name" maxLength="40" value={name} required />
        <input onChange={handleInputChange} type="email" name="email" placeholder="Email" maxLength="50" value={email} required />
        <input onChange={handleInputChange} type="text" name="CPF" placeholder="CPF" maxLength="11" value={cpf} required />
        <input onChange={handleInputChange} type="text" name="endereço" placeholder="Endereço" maxLength="200" value={endereço} required />
        <input onBlur={handleCityName} onChange={handleInputChange} type="text" name="cidade" placeholder="Cidade" maxLength="28" value={cidade} required />
        <select name="estado" onChange={handleInputChange} required>{estados.map((curr) => <option key={curr}>{curr}</option>)}</select>
        <div>
          <p>Você mora em:</p>
          <label htmlFor="apartamento">Apartamento
          <input id="apartamento" onChange={handleInputChange} type="radio" name="casapartamento"></input>
          </label>
          <label htmlFor="casa">Casa
          <input id="casa" onChange={handleInputChange} type="radio" name="casapartamento"></input>
          </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;
