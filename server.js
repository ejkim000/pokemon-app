const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon');

// SETTING UP VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {
        pokemon: pokemon
    })
})

app.get('/pokemon/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})


app.listen(PORT, () =>{
    console.log('Listening on port ', PORT);
});