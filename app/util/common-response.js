/**
 * This module handles the  final response which will be
 * sent to the consumer
 * @module util/common-response
 */

/**
 * Creates the response when  an error has happened
 * @param {object} res - express response
 * @param {number} status - The status code to send
 * @param {string} message - The message to show in the body
 * @param {string} code - The status message, the default value is error
 */
function setResponseWithError(res, status, message, code = 'error') {
  return res.status(status).send({ code, message });
}

/**
 * Creates the response when the process finished correctly
 * @param {object} res - express response
 * @param {number} status - The status code to send
 * @param {string} message - The message to show in the body
 * @param {string} code - The status message, the default value is ok
 */
function setResponseWithOk(res, status, message, code = 'ok') {
  return res.status(status).send({ code, message });
}

module.exports.setResponseWithError = setResponseWithError;
module.exports.setResponseWithOk = setResponseWithOk;
