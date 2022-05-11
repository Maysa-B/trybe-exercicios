import React from "react";

class AgeInput extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    let error = '';

    if (value < 18) error = 'Você é menor de idade';

    return (
      <div>
        <label>
          Idade:
          <input name="ageInput" onChange={handleChange} type='number' value={value}></input>
        </label>
        <p>{error}</p>
      </div>
    )
  }
}

export default AgeInput;