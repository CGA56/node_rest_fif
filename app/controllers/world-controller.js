const request = require('request');
/**
 * call country service  and return data of counstries  and checks whether or not a error.
 * @module controllers/world-controller
*/
const worldRest = function () {
  this.getData = async (url) => {
    return new Promise((resolve, reject) => {
      request(url, (err, resp, body) => {
        if (err) {
          reject(err);
        }
        resolve(body);
      }
      );
    });
  };
};

module.exports = worldRest;
