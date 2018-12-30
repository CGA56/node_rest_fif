/**
 * express route to handle the flow of saving a new cat (POST)
 * @module routes/router
 */

const Router = require('express').Router;
const TokenValidationMiddleware = require('../middlewares/token-validation-middleware').TokenValidationMiddleware;
const CatSchemaValidationMiddleware = require('../middlewares/cat-validation-schema-middleware').CatSchemaValidationMiddleware;
const SaveNewCatMiddleware = require('../middlewares/save-new-cat-middleware').SaveNewCatMiddleware;

const router = Router();


router.post('/', [
  TokenValidationMiddleware,
  CatSchemaValidationMiddleware,
  SaveNewCatMiddleware
]);

module.exports = router;
