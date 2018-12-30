let commonConfig = null;
if (!commonConfig) {
  const env = process.env.NODE_ENV || 'local';
  const cfg = require(`./config.${env}`); // eslint-disable-line
  commonConfig = cfg;
}
/**
 * generates a frozen object with the configuration
 * @module config/index
 */
module.exports = Object.freeze(commonConfig);
