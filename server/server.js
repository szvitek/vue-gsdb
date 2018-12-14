const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes/api');
const path = require('path');

//enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname + './../dist')));

app.all('*', function(req, res) {
  res.sendFile(path.join(__dirname + './../dist/index.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});