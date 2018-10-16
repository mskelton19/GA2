const express = require('express');

const app = express();

app.get('/frasier', (req, res) =>{
  res.send("Once in prep school, the Existentialist Club named me 'Most Likely to Be'")
})

app.get('/niles', (req, res) =>{
  res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")
})

app.listen(3000, () => {
  console.log("Listening");
})
