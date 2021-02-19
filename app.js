const express = require('express');
const cors = require('cors');
const app = express();
const { skateboards } = require('./data.js');

app.use(cors());


app.get('/skateboards', (req, res) => {
    res.json({result: skateboards})
})

app.get('/skateboards/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedSkateboards = skateboards.find((board) => board.id === id);

    res.json({result: selectedSkateboards});
})


module.exports = {
    app
};