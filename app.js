const express = require('express');
const cors = require('cors');
const app = express();
const { skateboards } = require('./data.js');

app.use(cors());


app.get('/skateboards', (req, res) => {
    res.json({skateboards})
})

app.get('/skateboards/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedSakteboards = skateboards.find((board) => board.id === id);

    res.json({selectedSakteboards});
})


module.exports = {
    app
};