import React from "react";

function Index({ pokemon }) {
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "orange",
  };

  return (
    <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <ul>
            { pokemon.map((item, i) => {
                const firstUpper = item.name.charAt(0).toUpperCase() + item.name.slice(1);
                return <li>{firstUpper}</li>
            })}
            
        </ul>
    </div>
  
  );
}

module.exports = Index;