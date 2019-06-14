
//TODO
import React from 'react';
import PokemonList from './PokemonList';
import Search from './Search.js';

class App extends React.Component { //Aoo is a function that creates a div (component)
  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }

    this.updateState = this.updateState.bind(this)
  }

  //componenetDidMount: as soon as the component mounts, it will run
  // lifecycle methods

  componentDidMount() {   //setState is async function; need to pass callback

    this.setState({ pokemon: this.props.pokemon}, () => console.log(this.props.pokemon));

  }

  updateState(newPoke) {
    this.setState(
      {pokemon: newPoke}
    )
  }

  // someFunc() {
  //   //change state of pokemon
  //   this.setState({ pokemon: })
  // }

  render() {
    return (
    <div>
      <Search getPokemon={this.props.getPokemon} updateState={this.updateState}/>
      <PokemonList pokemon={this.props.pokemon} getPokemon={this.props.getPokemon}/>
    </div>
    )
    }
  };

export default App;