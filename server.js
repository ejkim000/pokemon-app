require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3001;
// const pokemons = require('./models/pokemon');

// SETTING UP VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// this allows the body of post request
app.use(express.urlencoded({extended:false})); // for the form submit

// SETUP MONGOOSE & MODEL
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

// MONGOOSE CONNECTION
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// CONNECT TO MONGODB
mongoose.connect(mongoURI, {
  // GET RID OF ERRORS IN THE CONSOLE
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// ROUTES
app.get('/', (req, res) => {
    res.redirect('/pokemon');
})

// Pokemon list
app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {
        pokemons: pokemons
    })
})

// new
app.get('/pokemon/new', (req,res) => {
    res.render('New');
})

// create
app.post('/pokemon', (req, res) => {
    const newPokemon = {
        name: req.body.name, 
        img: "http://img.pokemondb.net/artwork/" + req.body.name
    }

    pokemons.push(newPokemon);
    res.redirect('/pokemon');
})

// detail
app.get('/pokemon/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('Show', {
        pokemon: pokemons[req.params.id]
    })
})


app.listen(PORT, () =>{
    console.log('Listening on port ', PORT);
});