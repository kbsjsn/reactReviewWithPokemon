import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''

    }
  }

  //to change state... use setState; 
  //console.dir(e.target)

  handleInput = (e) => {    //this event is from the onClick
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault(); //stops from refreshing the page
    this.props.getPokemon(this.state.text, this.props.updatePoke);
    console.log(this.state.text);
  }

  //in ES6, this is how you build methods
  render() {    //methods of your constructor function, 
    return(       //eventhandlers take in function definitions, not invocation
    <div>
      <form action="" onSubmit={this.handleSubmit}>     {/* onChange, not onClick */}
        <input type="text" onChange={this.handleInput} value={this.state.text} />
        <button type="sumbit" onClick={this.handleSubmit}>submit</button>     
      </form>
    </div>
    )
  }       ////onClick={this.handleInput}  is the same as onCLick((e) => this.handelInput(e))
}

export default Search;