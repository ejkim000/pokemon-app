require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3001;

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

// CONNECT TO MONGODB
mongoose.connect(mongoURI, {
  // GET RID OF ERRORS IN THE CONSOLE
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// ROUTES
// root
app.get('/', (req, res) => {
    res.redirect('/pokemon');
})

// Pokemon list
app.get('/pokemon', async (req, res) => {
    const pokemons = await Pokemon.find({});
    console.log(pokemons);
    res.render('Index', {
        pokemons: pokemons
    })
})

// new page
app.get('/pokemon/new', (req,res) => {
    res.render('New');
})

// create pokemon
app.post('/pokemon', async (req, res) => {
    const name = req.body.name.toLowerCase();
    const newPokemon = {
        name: name.charAt(0).toUpperCase() + name.slice(1), 
        img: "http://img.pokemondb.net/artwork/" + name + ".jpg"
    }
    await Pokemon.create(newPokemon)
    .then(pokemon => {
        console.log(pokemon)
    }).catch(error => {
        console.log(error)
    });

    res.redirect('/pokemon');
})

// show page
app.get('/pokemon/:name', async (req,res) => {
    await Pokemon.findOne({name: req.params.name})
    .then(foundPokemon => {

        res.render('Show', {
            pokemon: foundPokemon
        }) 

    }).catch(error => {
        console.log(error)
    });
});


// RUN SERVER
app.listen(PORT, () =>{
    console.log('Listening on port ', PORT);
});