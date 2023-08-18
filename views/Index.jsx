import React from "react";

function Index({ pokemons }) {
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "orange",
  };

  return (
    <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <ul>
            { pokemons.map((pokemon, i) => {
                const firstUpper = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return <li key={i}><a href={`pokemon/${i}`}>{firstUpper}</a></li>
            })}
            
        </ul>
    </div>
  
  );
}

module.exports = Index;