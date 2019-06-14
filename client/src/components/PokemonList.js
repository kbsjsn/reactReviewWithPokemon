//TODO
import React from 'react';
import PokemonListItem from './PokemonListItem.js';

//stateless component... use just "props", not "this.props"
const PokemonList = (props) =>    //props must be defined in the parameter to be used
  <div id="pokemonList">
    {props.pokemon.map((poke, i) => 
        <PokemonListItem poke={poke} key={i}/>
      )} 

  </div>


export default PokemonList;