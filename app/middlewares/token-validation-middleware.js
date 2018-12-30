const config = require('../config');
const setResponseWithError = require('../util/common-response').setResponseWithError;
const secureCompare = require('secure-compare');
/**
 * This middleware checks  if the token sent by the user or client is correct
 * x-token is in the headers and the same value can be found in the configs
 * @module middlewares/TokenValidationMiddleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @param {function} next - the next function to leap to next middleware
 * @returns {funciton} return the next function if the body is ok and an error 401 when it is not
 */
function TokenValidationMiddleware(req, res, next) {
  const userToken = req.headers['x-token'];
  const configToken = config.msConfig.token;
  if (!secureCompare(configToken, userToken)) {
    return setResponseWithError(res, 401, 'wrong access token');
  }
  return next();
}

module.exports.TokenValidationMiddleware = TokenValidationMiddleware;
