# is-package [![Build Status](https://travis-ci.org/bendrucker/is-package.svg?branch=master)](https://travis-ci.org/bendrucker/is-package) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/is-package.svg)](https://greenkeeper.io/)

> Detect if a string is a package name that could be on npm


## Install

```
$ npm install --save is-package
```


## Usage

```js
var isPackage = require('is-package')

isPackage('xtend')
//=> true

isPackage('./node_modules/xtend')
//=> false
```

## API

#### `isPackage(name)` -> `boolean`

##### name

*Required*  
Type: `string`

The package name or path to test.


## License

MIT © [Ben Drucker](http://bendrucker.me)
