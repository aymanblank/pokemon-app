import { connect } from 'react-redux';
import PokemonPage from './PokemonPage';
import { getPokemonAction } from '../../store/actions/pokemonsActions';

const mapStateToProps = state => {
  return {
    error: state.pokemons.error,
    pending: state.pokemons.pending,
    pokemon: state.pokemons.selectedPokemon,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemon: (pokemonId) => dispatch(getPokemonAction(pokemonId))
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PokemonPage);