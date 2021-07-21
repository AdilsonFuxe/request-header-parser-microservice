const express = require('express');
const app = express();

const cors = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
};

app.use(cors);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

const PORT = 3000 || process.env.PORT;
const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
