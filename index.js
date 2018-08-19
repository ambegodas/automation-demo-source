var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Automation Rocks!!!2');
});
app.listen(3000, function () {
  console.log('Demo automation app is listening on port 3000');
});
