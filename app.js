const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const catRoute = require('./app/routes/cat-route');
const config = require('./app/config');
const mundoRoute = require('./app/controllers/mundo-controller');
const lenguajeRoute = require('./app/routes/lenguaje-route');


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

app.get('/api/v1/info/countries', (req, res) => {
  const mundo = new mundoRoute();
  mundo.paisAll('https://restcountries.eu/rest/v2/all')
  .then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get('/api/v1/info/countries/:name', (req, res) => {
  const mundo = new mundoRoute();
  const pais = req.body.name;
  mundo.paisPorNombre(`https://restcountries.eu/rest/v2/name/${pais}`)
  .then((paisResult) => {
    res.status(200).send(paisResult);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

// app.get('/api/v1/info/lang/:lang', (req, res) => {
//   const mundo = new mundoRoute();
//   const lenguaje = req.body.lang;
//   mundo.paisPorNombre(`https://restcountries.eu/rest/v2/lang/${lenguaje}`)
//   .then((lenguajeResult) => {
//     res.status(200).send(lenguajeResult);
//   }).catch((err) => {
//     res.status(400).send(err);
//   });
// });
module.exports = app;
