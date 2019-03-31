import React from 'react';

export default function NavBar(){
  return (
    <nav data-test="navComponent" className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a href="/" className="navbar-brand">Pokemons App</a>
    </nav>
  )
}