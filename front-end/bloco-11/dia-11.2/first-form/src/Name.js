import React from "react";

class Name extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = '';

    if (value.length < 10) error = 'Nome inválido: muito curto';
    if (value.length > 100) error = 'Nome inválido: muito comprido';

    return (
      <div>
        <label>
          Nome:
          <input name="nameInput" onChange={handleChange} type='text' value={value}></input>
        </label>
        <p>{error}</p>
      </div>
    )
  }
}

export default Name;