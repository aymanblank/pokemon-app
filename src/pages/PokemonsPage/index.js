import { connect } from 'react-redux';
import PokemonsPage from './PokemonsPage';
import { getPokemonsAction } from '../../store/actions/pokemonsActions';

const mapStateToProps = state => {
  return {
    error: state.pokemons.error,
    pending: state.pokemons.pending,
    pokemons: state.pokemons.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: () => dispatch(getPokemonsAction())
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PokemonsPage);