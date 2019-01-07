const Router = require('express').Router;
const LenguajeMiddleware = require('../middlewares/lenguaje-middleware').LenguajeMiddleware;
const LenguajeValidationMiddleware = require('../middlewares/lenguaje-validation-middleware').LenguajeValidationMiddleware;

const router = Router();


router.get('/api/v1/info/lang/:lang', [
  LenguajeValidationMiddleware,
  LenguajeMiddleware
]);
module.exports = router;
