/*!
 * put-value <https://github.com/tunnckoCore/put-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var put = require('./index')

test('put-value:', function () {
  test('should return empty object if not object given', function (done) {
    test.deepEqual(put(123), {})
    done()
  })
  test('should return original object if `key` not string or object', function (done) {
    var actual = {a: 'b'}
    var expected = {a: 'b'}

    test.deepEqual(put(actual, 123), expected)
    done()
  })
  test('should update only existing values if `key` is string', function (done) {
    var actual = put({a: {b: 'c'}}, 'a', 'abc')
    var expected = {a: 'abc'}

    test.deepEqual(actual, expected)
    done()
  })
  test('should update only existing values if `key` is dot path', function (done) {
    var actual = put({a: {b: 'c'}}, 'a.b', 'bbb')
    var expected = {a: {b: 'bbb'}}

    test.deepEqual(actual, expected)
    done()
  })
  test('should update only existing when `key` is object', function (done) {
    // put({a: {b: 'c'}}, {a: {z: 'zzz'}}) //=> {a: {z: 'zzz'}}
    // put({a: {b: 'c'}}, {z: 'zzz'}) //=> {a: {b: 'c'}}

    done()
  })
})
