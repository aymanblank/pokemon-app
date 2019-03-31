import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../../components/PokemonCard';

class PokemonsPage extends Component {

  componentDidMount(){
    this.props.getPokemons();
  }

  render() {

    if(this.props.error){
      return (
        <div data-test="errorAlert" className="alert alert-dismissible alert-danger">
          <h4 className="alert-heading">Error!</h4>
          <p className="mb-0">Something Went Wrong.</p>
        </div>
      );
    }

    return (
      <div data-test="container" className="container">
        <h1 data-test="header" className="my-3">POKEMONS</h1>
        {this.props.pending ? 
        <h3 data-test="loading" className="my-3">Loading...</h3>
        :
        <div className="row">
          {this.props.pokemons ? 
          this.props.pokemons.map(pokemon => (
            <PokemonCard data-test="pokemonCard" key={pokemon.id} {...pokemon}/>
          ))
          :
          null}
        </div>
        }
      </div>
    );
  }
}

PokemonsPage.propTypes = {
  error: PropTypes.any,
  pending: PropTypes.bool,
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    number: PropTypes.string,
    name: PropTypes.string,
    maxCP: PropTypes.number,
    maxHP: PropTypes.number,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }))
}

export default PokemonsPage;
