var Q = require('q');

module.exports = {

  success: function () {
    return Q.resolve(true);
  },

  reject: function () {
    return Q.reject(false);
  },

  exception: function () {
    // You can handle exceptions with Promise.
    // You will be free to afraid missing errors.
    return Q.fcall(function () {
      throw new Error();
    });
  }

};
