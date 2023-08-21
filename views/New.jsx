import React from 'react'

function New() {
  return (
    <div>
        <h1>Add a New Pokemon</h1>
        <form action='/pokemon' method='post'>
            Name: <input type="text" name="name" /> <br />
            {/* Image URL: <input type="text" name="img" /> <br /> */}
            <input type="submit" value="Add New" />
        </form>
    </div>
  )
}

module.exports = New;