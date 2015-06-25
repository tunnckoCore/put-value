/*!
 * put-value <https://github.com/tunnckoCore/put-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var lazy = require('lazy-cache')(require)
var isObject = lazy('isobject')
var hasOwn = lazy('has-own-deep')
var assign = lazy('assign-deep')
var kindOf = lazy('kind-of')
var set = lazy('set-value')

module.exports = function putValue (obj, key, value) {
  if (!isObject()(obj)) {
    return {}
  }
  var type = kindOf()(key)
  if (type !== 'string' && type !== 'object') {
    return obj
  }
  if (type === 'object') {
    obj = assign()(obj, key)
    return obj
  }
  if (key.indexOf('.') === -1) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = value
    }
    return obj
  }
  if (hasOwn()(obj, key)) {
    set()(obj, key)
  }
  return obj
}
