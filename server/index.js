const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = "You will finish this nodb project";

app.get('/data', (req,res)=>{
    res.status(200).json(data);
})

const port = 4000;
app.listen(port, ()=>{
    console.log(`I am fricken listening on port ${port} !!!!!!!🍓 🍒 🥑`)
})

