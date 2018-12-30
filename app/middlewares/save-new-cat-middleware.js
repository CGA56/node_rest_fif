const setResponseWithError = require('../util/common-response').setResponseWithError;
const setResponseWithOk = require('../util/common-response').setResponseWithOk;
const SaveNewCatController = require('../controllers/save-new-cat-controller');

/**
 *  This middleware  calls the controller to  try to save a new cat
 *  @module middlewares/SaveNewCatMiddleware
 *  @async
 *
 * @param {object} req - the express request object
 * @param {object} res - the express response object
 * @returns {function} returns 200 and the data saved or 500 with an error message
 */
async function SaveNewCatMiddleware(req, res) {
  try {
    const saveNewCatController = new SaveNewCatController();
    const response = await saveNewCatController.save(req.body);
    return setResponseWithOk(res, 200, response);
  } catch (error) {
    return setResponseWithError(res, 500, error.message);
  }
}

module.exports.SaveNewCatMiddleware = SaveNewCatMiddleware;
