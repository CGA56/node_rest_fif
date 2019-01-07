
const setResponseWithError = require('../util/common-response').setResponseWithError;
const setResponseWithOk = require('../util/common-response').setResponseWithOk;
const WorldController = require('../controllers/world-controller');

const lenguajes = [];
/**
 *  This middleware  calls the controller to  try to call a countries service.
 *  @module middlewares/lenguaje-middleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} return the data or 404 if result is null or return 500 status with error.
 */
function LenguajeMiddleware(req, res) { 
  const lenguaje = req.query.lang;
  const world = new WorldController();
  world.getData(`https://restcountries.eu/rest/v2/lang/${lenguaje}`)
  .then((data) => {
    const dataFormat = JSON.parse(data);
    for (let index = 0; index < dataFormat.length; index++) {
      lenguajes.push(dataFormat[index].languages);
    }
    if (lenguajes.length === 0) {
      return setResponseWithError(res, 404, 'No results found');
    }
    return setResponseWithOk(res, 200, lenguajes);
  }).catch((err) => {
    return setResponseWithError(res, 400, err);
  });
}

module.exports.LenguajeMiddleware = LenguajeMiddleware;
