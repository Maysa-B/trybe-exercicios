import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
      {conteudos.map(curr => (<div> 
        <h3>{`O conteúdo é: ${curr.conteudo}`}</h3>
        <p>{`Status: ${curr.status}`}</p>
        <p>{`Bloco: ${curr.bloco}`}</p>
      </div>)
      )}
      </div>
    )
  }
}

export default Content;