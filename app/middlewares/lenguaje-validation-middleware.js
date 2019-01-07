const setResponseWithError = require('../util/common-response').setResponseWithError;
/**
 *
 *  This middleware validates that the lang parameter exists and is not null.
 *  @module middlewares/countrie-validation-middleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} returns next function or 500 with an error message
 */
function LenguajeValidationMiddleware(req, res, next) {
  const lenguaje = req.query.lang;
  if (!lenguaje) {
    return setResponseWithError(res, 400, 'The lang parameter is required.');
  }
  return next();
}

module.exports.LenguajeValidationMiddleware = LenguajeValidationMiddleware;
