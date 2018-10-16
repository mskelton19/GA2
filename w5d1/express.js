const express = require('express');
// think of this as the express library itself
const app = express();
// app is an object

const fruits = ['apple', 'banana', 'pear'];

// app.get('/somedata', (request, response) => {
//   response.send('here is your information');
// })

app.get('/fruits/awesome', (req, res) => {
  res.send("Fruits are awesome");
})

app.get('/fruits/:index', (req, res) => {
  res.send(fruits[req.params.index]);
})

app.listen(3000, () => {
  console.log("biyah");
})
