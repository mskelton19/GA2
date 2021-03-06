const express = require('express');

const superheroes = require('./models/data.js');

const app = express();

var port = 3000;

app.get('/superheroes', (req, res) => {
  res.render('show.ejs', {
    superheroes
  });
})

app.get('/superheroes/:index', (req, res) => {
  res.render('superheroes.ejs', {
    superheroes: superheroes[req.params.index]
  });
})


app.listen(3000, () => {
  console.log("Listening to port: " + port)
})
