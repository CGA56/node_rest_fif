
const setResponseWithError = require('../util/common-response').setResponseWithError;
const setResponseWithOk = require('../util/common-response').setResponseWithOk;
const mundoRoute = require('../controllers/mundo-controller');

const lenguajes = [];
/**
 *  This middleware checks the body of the request against the defined schema
 *  @module middlewares/LangSchemaValidationMiddleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} return the next function if the body is ok and an error 400 when it is not
 */
function LangSchemaValidationMiddleware(req, res) {
  const mundo = new mundoRoute();  
  const lenguaje = req.body.lang;
  console.log(lenguaje);
  mundo.paisPorNombre(`https://restcountries.eu/rest/v2/lang/${lenguaje}`)
  .then((data) => {
    const dataFormat = JSON.parse(data);
    for (let index = 0; index < dataFormat.length; index++) {
      lenguajes.push(dataFormat[index].languages);     
    }
    return setResponseWithOk(res, 200, lenguajes);
  }).catch((err) => {
    return setResponseWithError(res, 400, err);
  });
};

module.exports.LangSchemaValidationMiddleware = LangSchemaValidationMiddleware;
