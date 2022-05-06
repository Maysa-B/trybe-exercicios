import React from "react";
import PropTypes from 'prop-types';

class Pokemom extends React.Component {
  render() {
    const poke = this.props.poke;
    const { name, type, averageWeight: { value, measurementUnit}, image } = poke;

    return (
      <section>
        <article>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {value}{measurementUnit}</p>
        </article>
        <img src={image} alt={name}></img>
      </section>
    )
  }
}

Pokemom.prototype = {
  poke: PropTypes.shape({
    name:PropTypes.string,
    type:PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string
  })
}

export default Pokemom;