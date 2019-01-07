const setResponseWithError = require('../util/common-response').setResponseWithError;
/**
 *
 *  This middleware validates that the name parameter exists and is not null.
 *  @module middlewares/countrie-validation-middleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} returns next function or 500 with an error message
 */
function CountrieForNameValidationMiddleware(req, res, next) {
  const country = req.query.name;
  if (!country) {
    return setResponseWithError(res, 500, 'The name parameter is required.');
  }
  return next();
}

module.exports = CountrieForNameValidationMiddleware;
