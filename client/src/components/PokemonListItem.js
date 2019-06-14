//TODO
import React from 'react';

const PokemonListItem = (props) => (     //by import the React, you ensure that this is a React component
  <div className="pokemonItem">
    <div>Name: {props.poke.name}</div>
    <div>Id: {props.poke.id}</div>
    <img src={props.poke.sprites.front_default} alt="pokemon image"/> 
  </div>
);

export default PokemonListItem;