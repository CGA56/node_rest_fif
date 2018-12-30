const joi = require('joi');

const catSchema = joi.object().keys({
  idRegister: joi.number().integer().positive().required(),
  name: joi.string(),
  color: joi.string().required(),
  born: joi.date().allow(null),
  tom: joi.boolean().default(true),
});

module.exports = catSchema;
