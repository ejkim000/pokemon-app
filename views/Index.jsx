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
            { pokemons && pokemons.map((pokemon) => {
                return <li key={pokemon.id}><a href={`pokemon/${pokemon.id}`}>{pokemon.name}</a></li>
            })}
            <li><br /><br /><a href="/pokemon/new">Add New Pokemon</a></li>
        </ul>
        
        
    </div>
  
  );
}

module.exports = Index;