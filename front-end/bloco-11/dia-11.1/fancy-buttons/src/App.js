import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0
    }

    this.retorno1 = this.retorno1.bind(this);
    this.retorno2 = this.retorno2.bind(this);
    this.retorno3 = this.retorno3.bind(this);
    this.bgColor = this.bgColor.bind(this);
  }

  retorno1() {
    this.setState((estadoAnterior, _props) => ({
      button1: estadoAnterior.button1 + 1
    }))
    console.log(this.bgColor(this.state.button1));
  }

  retorno2() {
    this.setState((estadoAnterior, _props) => ({
      button2: estadoAnterior.button2 + 1
    }))
    console.log(this.bgColor(this.state.button2));
  }

  retorno3() {
    this.setState((estadoAnterior, _props) => ({
      button3: estadoAnterior.button3 + 1
    }))
    console.log(this.bgColor(this.state.button3));
  }

  bgColor(number) {
    if (number % 2 === 0) {
      return 'lightgreen';
    } else {
      return 'pink';
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.retorno1}
          style={{ backgroundColor: this.bgColor(this.state.button1) }}>
          Botão 1 - clicks:{this.state.button1}</button>
        <button onClick={this.retorno2}
          style={{ backgroundColor: this.bgColor(this.state.button2) }}>
          Botão 2 - clicks:{this.state.button2}</button>
        <button onClick={this.retorno3}
          style={{ backgroundColor: this.bgColor(this.state.button3) }}>
          Botão 3 - clicks:{this.state.button3}</button>
      </div>
    )
  }
}


export default App;
