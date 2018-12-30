const Joi = require('joi');
const setResponseWithError = require('../util/common-response').setResponseWithError;
const catSchema = require('../schemas/cat-schema');
/**
 *  This middleware checks the body of the request against the defined schema
 *  @module middlewares/CatSchemaValidationMiddleware
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} return the next function if the body is ok and an error 400 when it is not
 */
function CatSchemaValidationMiddleware(req, res, next) {
  const result = Joi.validate(req.body, catSchema);
  // console.info(result);
  if (result.error) {
    return setResponseWithError(res, 400, 'the request body is not correct');
  }
  return next();
}

module.exports.CatSchemaValidationMiddleware = CatSchemaValidationMiddleware;
