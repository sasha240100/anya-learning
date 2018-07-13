var express = require('express'); // function

var app = express();

app.listen(8080, function () {
  console.log('Server started!');
});

// app.get([routePath], [callback]);
app.get('/route1', function (req, res) {
  res.send('You\'ve got to route #1');
});

app.get('/route2', function (req, res) {
  res.send('You\'ve got to route #2');
});
