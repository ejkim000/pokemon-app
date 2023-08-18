import React from "react";

function Show({ pokemon }) {
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "orange",
  };

  const firstUpper = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonImg = pokemon.img + '.jpg';

  return (
    <div>
        <h1 style={myStyle}>Gotta Catch 'Em All</h1>
        <h2>{firstUpper}</h2>
        <img src={pokemonImg} alt={firstUpper} /> <br />
        <a href="/pokemon">Back</a>
    </div>
  
  );
}

module.exports = Show;