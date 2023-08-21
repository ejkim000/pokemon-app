import React from "react";

function New() {
  const h1Style = {
    color: "#ffffff",
    backgroundColor: "orange",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
  };

  const formStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    textAlign: "center",
    margin: "20px",
    padding: "20px"
  };

  return (
    <div>
      <h1 style={h1Style}>Add a New Pokemon</h1>
      <form style={formStyle} action="/pokemon" method="post">
        Name: <input type="text" name="name" /> <br />
        {/* Image URL: <input type="text" name="img" /> <br /> */}
        <input type="submit" value="Add New" />
      </form>
    </div>
  );
}

module.exports = New;
