import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Image = styled.img`
  height: 150px;
  width: 150px;
  display: block;
  margin: 0 auto;
`;

class PokemonCard extends Component{
  
  render(){
    const {
      id = "",
      number = null,
      name = null,
      maxCP = null,
      maxHP = null,
      image = "",
      types = null,
      hideMoreInfo = false,
    } = this.props;

    return (
      <div data-test="pokemonCardComponent" className="my-2 col-lg-3 col-md-4 col-sm-12">
        <div className="card">
          <h3 data-test="pokemonName" className="card-header">{name || 'N/A'}</h3>
          <div className="card-body">
            <h5 data-test="pokemonTypesTitle" className="card-title">Types</h5>
            <h6 data-test="pokemonTypesValues" className="card-subtitle text-muted">
            { types ?
              types.map((type, index) => (<span key={index} className="badge badge-light">{type}</span>))
              :
              <p>N/A</p>
            }
            </h6>
          </div>
          <Image data-test="pokemonImage" src={image} alt="Pokemon Image" />
          <ul className="list-group list-group-flush mt-3">
            <li data-test="pokemonNumber" className="list-group-item">Number : {number || 'N/A'}</li>
            <li data-test="pokemonMaxHP" className="list-group-item">Max HP : {maxHP || 'N/A'}</li>
            <li data-test="pokemonMaxCP" className="list-group-item">Max CP : {maxCP || 'N/A'}</li>
          </ul>
          {!hideMoreInfo ?
          <div className="card-body">
            <Link data-test="pokemonMoreLink" to={`/pokemon/${id}`} className="card-link">
              More Information
            </Link>
          </div>
          : null}
        </div>
      </div>
    )
  }
}

PokemonCard.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  maxCP: PropTypes.number,
  maxHP: PropTypes.number,
  image: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  hideMoreInfo: PropTypes.bool,
}

export default PokemonCard;