'use strict'

var validate = require('validate-npm-package-name')

module.exports = function isPackage (name) {
  return validate(name).validForOldPackages
}
