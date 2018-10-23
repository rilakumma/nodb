const express = require('express');
const bodyParser = require('body-parser');
const favorites = require('./favorites_controller');

const app = express();
app.use(bodyParser.json());

app.post('/api/favorites', favorites.createFav);
app.get('/api/favorites', favorites.getFav);

const port = 4000;
app.listen(port, ()=>{
    console.log(`I am fricken listening on port ${port} !!!!!!!🍓 🍒 🥑`)
})

// app.get('/api/favs', favorites.getFav);
// app.post('/api/favs', favorites.createFav);
// app.put('/api/favs/:id', favorites.updateFav);
// app.delete('/api/favs/:id', favorites.deleteFav);
