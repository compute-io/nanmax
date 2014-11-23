nanmax
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the maximum value of an array ignoring non-numeric values.


## Installation

``` bash
$ npm install compute-nanmax
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var max = require( 'compute-nanmax' );
```

#### max( arr )

Computes the maximum value of an array ignoring non-numeric values.

``` javascript
var data = [ -5, null, -2, -3, null, -7 ];

var val = max( data );
// returns -2
```

Note: if an input `array` does not contain any numeric values, the function returns `null`.


## Examples

``` javascript
var max = require( 'compute-nanmax' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	// Every so often insert a missing value...
	if ( i%10 ) {
		data[ i ] = null;
	} else {
		data[ i ] = -1 * Math.round( Math.random()*100 );
	}
}
var val = max( data );
console.log( val );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-nanmax.svg
[npm-url]: https://npmjs.org/package/compute-nanmax

[travis-image]: http://img.shields.io/travis/compute-io/nanmax/master.svg
[travis-url]: https://travis-ci.org/compute-io/nanmax

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nanmax/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nanmax?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nanmax.svg
[dependencies-url]: https://david-dm.org/compute-io/nanmax

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nanmax.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nanmax

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nanmax.svg
[github-issues-url]: https://github.com/compute-io/nanmax/issues
