
/**
* has the list of the all cats saved
* @global
*/
const cats = [];

/**
 * saves a new cat  in the store of cats  and checks whether or not a new cat can be added
 * @module controllers/SaveNewCatController
*/

const SaveNewCatController = function () {
  /**
  * the number of cats allows
  * @private
  */
  const catLimit = 10;
  /**
   * This returns the data  for the client or throws an exception
   * @async
   * @function save
   * @param {object} catRequest - the new cat to be added
   * @throws  {Error} the error to be handled for the middleware
   * @returns {object} the json response with the data ok
   */
  this.save = (catRequest) => {
    if (this.canAddNewCat(cats.length, catLimit)) {
      return this.addCat(catRequest);
    }
    throw new Error(`Internal error, the number  of cats have gotten the limit(${catLimit})`);
  };

  /**
   * This returns true or false whether a new cat can be added
   * @function data
   * @param {number} catNumber - the number of cats
   * @param {number} catLimitNumber - the limit of cats accepted
   * @returns {boolean}
   */
  this.canAddNewCat = (catNumber, catLimitNumber) => {
    if (catNumber < catLimitNumber) return true;
    return false;
  };

  /**
   * This adds a new a cat into the cats array
   * a new id for the cat is generated each time
   * @async
   * @function addCat
   * @param {object} newCat - the new cat with its data
   * @return {object} the cat object pluss a its new id
   */
  this.addCat = async (newCat) => {
    const catWithNewId = Object.assign({ id: this.newId(cats.length) }, newCat);
    cats.push(catWithNewId);
    return catWithNewId;
  };

  /**
   * This returns a new id  by adding one to an existing value
   * @function newId
   * @param {Number} existingId - the existing id
   * @returns {Number} the new id
   */
  this.newId = (existingId) => {
    return existingId + 1;
  };
};

module.exports = SaveNewCatController;
