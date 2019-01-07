const Router = require('express').Router;
const { getAllCountriesMiddleware, getCountrieForNameMiddleware } = require('../middlewares/countries-middleware');
const CountrieForNameValidationMiddleware = require('../middlewares/countrie-validation-middleware');

const router = Router();


router.get('/api/v1/info/countries', [getAllCountriesMiddleware]);
router.get('/api/v1/info/countries/:name', [CountrieForNameValidationMiddleware, getCountrieForNameMiddleware]);

module.exports = router;
