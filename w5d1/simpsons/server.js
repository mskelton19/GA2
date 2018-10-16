const express = require('express');

const app = express();

app.get('/homer', (req, res) => {
  res.send("Doh");
})

app.get('/bart', (req, res) => {
  res.send("I will not write on the board");
})

app.get('/maggie', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Biyah</h1>
      </body>
    </html>
  `)
})


app.listen(3000, () => {
  console.log("Listening 2");
})
