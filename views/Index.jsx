import React from "react";

function Index({ pokemons }) {
  const h1Style = {
    color: "#ffffff",
    backgroundColor: "orange",
    textAlign: "center",
    margin: "20px",
    padding: "20px"
  };

  const ulStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    listStyleType: "none"
  };

  return (
    <div>
        <h1 style={h1Style}>See All The Pokemon!</h1>
        <ul style={ulStyle}>
            { pokemons.map((pokemon, i) => {
                const firstUpper = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return <li key={i}><a href={`pokemon/${i}`}>{firstUpper}</a></li>
            })}
            
        </ul>
    </div>
  
  );
}

module.exports = Index;