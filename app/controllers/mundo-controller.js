const request = require('request');

const mundoRest = function () {
  this.paisAll = async (url) => {
    return new Promise((resolve, reject) => {
      request(url, (err, resp, body) => {
        if (err) {
          reject(err);
        }
        if (body.length === 0) {
          reject('A ocurrido un error al conectar a la API');
        }
        resolve(body);
      }
      );
    });
  };
  this.paisPorNombre = async (url) => {
    return new Promise((resolve, reject) => {
      request(url, (err, resp, body) => {
        if (err) {
          reject(err);
        }
    
        if (!body) {
          reject('A ocurrido un error al conectar a la API');
        }

        if (body === undefined) {
          reject('El lenguaje es obligatorio');
        }
        resolve(body);
      }
    );
    });
  };
};

module.exports = mundoRest;
