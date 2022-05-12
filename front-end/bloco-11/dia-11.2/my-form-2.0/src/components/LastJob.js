import React from 'react';

// campos:
// prontos✅: curriculo, descrição, cargo
// pendentes❌:

class LastJob extends React.Component {

  render() {

    const { resumo, cargo, descrição, handleAlert, handleInputChange } = this.props;

    return(
      <fieldset>
        Dados do último emprego
        <textarea placeholder='Resumo do currículo' onChange={handleInputChange} maxLength="1000" name="resumo" value={resumo} required />
        <textarea onMouseEnter={handleAlert} placeholder='Cargo' onChange={handleInputChange} maxLength="40" name="cargo" value={cargo} required />
        <textarea placeholder='Descrição do cargo' onChange={handleInputChange} maxLength="500" name="descrição" value={descrição} required />
      </fieldset>
    )
  }
}

export default LastJob;
