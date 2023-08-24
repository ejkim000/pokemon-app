const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const pokemonSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    }
);

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;