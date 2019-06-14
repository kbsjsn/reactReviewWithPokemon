import axios from 'axios';

const getPokemon = (query, updatePoke) => {
  //TODO
  const axios = require('axios');

  axios.get('https://pokeapi.co/api/v2/berry/'.concat(query))
    .then(function(response) {
      updatePoke(response);
    } )
    .catch(function(error) {
      console.log(error);

    });

}

export default getPokemon;