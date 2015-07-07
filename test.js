'use strict'

var test = require('tape')
var isPackage = require('./')

test(function (t) {
  t.ok(isPackage('xtend'))
  t.ok(isPackage('@bendrucker/xtend'))
  t.notOk(isPackage('/foo/bar'))
  t.notOk(isPackage('./foo/bar'))
  t.end()
})
