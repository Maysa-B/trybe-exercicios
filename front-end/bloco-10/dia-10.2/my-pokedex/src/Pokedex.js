import React from "react";
import data from './data';
import Pokemom from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="allPokemons">
      {data.map(curr => <Pokemom poke={curr} key={curr.id} />)}
      </div>
    )
  }
}

export default Pokedex;