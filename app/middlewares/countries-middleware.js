const setResponseWithError = require('../util/common-response').setResponseWithError;
const setResponseWithOk = require('../util/common-response').setResponseWithOk;
const WorldController = require('../controllers/world-controller');
/**
 *  This middleware  calls the controller to  try to call a countries service.
 *  @module middlewares/countries-middleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function}  return the data or 404 if result is null or return 500 status with error..
 */
function getAllCountriesMiddleware(req, res) {
  const world = new WorldController();
  world.getData('https://restcountries.eu/rest/v2/all')
    .then((data) => {
      const result = JSON.parse(data);
      return setResponseWithOk(res, 200, result);
    }).catch((err) => {
      return setResponseWithError(res, 500, err);
    });
}

function getCountrieForNameMiddleware(req, res) {
  const world = new WorldController();
  const countrie = req.query.name;
  world.getData(`https://restcountries.eu/rest/v2/name/${countrie}`)
  .then((data) => {
    const result = JSON.parse(data);
    if (result.status === 404) {
      return setResponseWithError(res, 404, 'No results found');
    }
    return setResponseWithOk(res, 200, result);
  }).catch((err) => {
    return setResponseWithError(res, 500, err);
  });
}


module.exports = { getAllCountriesMiddleware, getCountrieForNameMiddleware };
