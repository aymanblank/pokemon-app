import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../../components/PokemonCard';

class PokemonPage extends Component {

  componentDidMount(){
    let { pokemon_id } = this.props.match.params;
    this.props.getPokemon(pokemon_id);
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
        <h1 data-test="header" className="my-3">POKEMON DETAILS</h1>
        {this.props.pending ? 
        <h3 data-test="loading" className="my-3">Loading...</h3>
        :
        <Fragment>
          { this.props.pokemon ?
          <div className="row">
            <PokemonCard data-test="pokemonCard" hideMoreInfo {...this.props.pokemon} />
          </div>
          : null
          }
          <h1 data-test="evolutionsHeader" className="my-3">Evolutions</h1>
          <div className="row">
            {this.props.pokemon && this.props.pokemon.evolutions ? 
            this.props.pokemon.evolutions.map(evoPokemon => (
              <PokemonCard data-test="evolutionPokemonCard" key={evoPokemon.id} hideMoreInfo {...evoPokemon} />
            ))
            :
            <p data-test="noEvolutionsMsg" className="col-sm-12">This pokeman has no evolutions</p>}
          </div>
        </Fragment>
        }
      </div>
    );
  }
}

PokemonPage.propTypes = {
  error: PropTypes.any,
  pending: PropTypes.bool,
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    number: PropTypes.string,
    name: PropTypes.string,
    maxCP: PropTypes.number,
    maxHP: PropTypes.number,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  })
}

export default PokemonPage;
