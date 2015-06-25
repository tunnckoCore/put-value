# put-value [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Update only existing values from an object, works with dot notation paths like `a.b.c` and support deep nesting.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Features
- updates value of `key` only if `key` exists
- updates only existing values of `obj` when object is given to `key`
- because `set-value` **update** values if exist and **add** if not exist
- returns original object if `key` is not an object or string
- returns empty object if `obj` is not an object
- returns modified object otherwise


## Install
```
npm i put-value --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var put = require('put-value')
var obj = {
  a: {
    foo: 'bar'
  },
  b: {
    bb: 'bbb'
  }
}

put(123) //=> empty object {}
put(obj, {a: {bar: 'baz'}}) //=> original `obj`
put(obj, {a: 'foo'}})
//=> {
//   a: 'foo',
//   b: {
//     bb: 'bbb'
//   }
// }

put(obj, {zzz: 'xxx'}) //=> original `obj`
put(obj, 'foo', 'baz') //=> original `obj`
put(obj, 'foo.bar', 'baz') //=> original `obj`
put(obj, 'a', {foo: 123})
//=> {
//   a: {
//     foo: 123
//   },
//   b: {
//     bb: 'bbb'
//   }
// }

put(obj, 'a.foo', {baz: 'aaa'})
//=> {
//   a: {
//     foo: {
//       baz: 'aaa'
//     }
//   },
//   b: {
//     bb: 'bbb'
//   }
// }
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/put-value/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/put-value
[npmjs-img]: https://img.shields.io/npm/v/put-value.svg?label=put-value

[license-url]: https://github.com/tunnckoCore/put-value/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/put-value
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/put-value.svg

[travis-url]: https://travis-ci.org/tunnckoCore/put-value
[travis-img]: https://img.shields.io/travis/tunnckoCore/put-value.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/put-value
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/put-value.svg

[david-url]: https://david-dm.org/tunnckoCore/put-value
[david-img]: https://img.shields.io/david/tunnckoCore/put-value.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
