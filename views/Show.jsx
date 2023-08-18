import React from "react";

function Show({ pokemon }) {
  const h1Style = {
    color: "#ffffff",
    backgroundColor: "orange",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
  };

  const containerStyle = {
    textAlign: "center",
    lineHeight: "1.8",
    margin: "20px",
    padding: "20px",
  };
  const firstUpper =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonImg = pokemon.img + ".jpg";

  return (
    <div>
      <h1 style={h1Style}>Gotta Catch 'Em All</h1>
      <div style={containerStyle}>
        <h2>{firstUpper}</h2>
        <img src={pokemonImg} alt={firstUpper} /> <br />
        <a href="/pokemon">Back</a>
      </div>
    </div>
  );
}

module.exports = Show;
