const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const catRoute = require('./app/routes/cat-route');
const config = require('./app/config');
// const mundoRoute = require('./app/controllers/mundo-controller');
const lenguajeRoute = require('./app/routes/lenguaje-route');
const countriesRoute = require('./app/routes/countries-route');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());


// health check MS
app.get('/api/pet/health/', (req, res) => {
  res.send(`${config.msConfig.name} up and running`);
});

app.use('/api/pet/cat', catRoute);

app.use(lenguajeRoute);

app.use(countriesRoute);

module.exports = app;
