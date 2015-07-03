/**
 * Promise unit test with Q and nodeunit
 */

var nodeunit = require('nodeunit'),
    promiseFuncs = require(__dirname + '/../index');

exports['Promise unit test'] = nodeunit.testCase({

  'success from Q': function (test) {
    promiseFuncs.success()
      .then(test.ok)
      .fail(console.log)
      .done(test.done);
  },

  'reject from Q': function (test) {
    promiseFuncs.reject()
      .then(function () {
        test.ok(false);
      })
      .fail(function (err) {
        test.ok(true);
      })
      .done(test.done);
  },

  'exception within Q': function (test) {
    promiseFuncs.exception()
      .then(function () {
        test.ok(false);
      })
      .fail(function (err) {
        test.ok(true);
      })
      .done(test.done);
  }

});
