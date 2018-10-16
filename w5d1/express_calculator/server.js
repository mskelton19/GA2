var express = require('express');

var app = express();

var port = 3000;

app.get('/calc/:num1/:num2', (req, res) => {
  var sum = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.send("The sum is: " + sum);
})

app.listen(3000, () =>{
  console.log("app is running on port: ", port)
})
