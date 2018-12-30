const Router = require('express').Router;
const LangSchemaValidationMiddleware = require('../middlewares/lenguaje-validation-schema-middleware').LangSchemaValidationMiddleware;

const router = Router();


router.get('/api/v1/info/lang/:lang', [LangSchemaValidationMiddleware]);
module.exports = router;