'use strict';
var amphtmlValidator = require('amphtml-validator');
 module.exports = (page) => {

amphtmlValidator.getInstance().then(function (validator) {
  var result = validator.validateString(page);
  (result.status === 'PASS' ? console.log : console.error)(result.status);
  for (var ii = 0; ii < result.errors.length; ii++) {
    var error = result.errors[ii];
    var msg =
      'line ' + error.line + ', col ' + error.col + ': ' + error.message;
    if (error.specUrl !== null) {
      msg += ' (see ' + error.specUrl + ')';
    }
    (error.severity === 'ERROR' ? console.error : console.warn)(msg);
  }
});

 }