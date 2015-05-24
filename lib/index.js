'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number' );

// NANMAX //

/**
* FUNCTION: nanmax( arr[, accessor] )
*	Computes the maximum value of an array ignoring any non-numeric values.
*
* @param {Number[]|Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} max value or null
*/
function nanmax( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'nanmax()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'nanmax()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	var len = arr.length,
		max = null,
		val,
		i;

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ], i );
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( max === null || val > max ) {
				max = val;
			}
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( max === null || val > max ) {
				max = val;
			}
		}
	}

	return max;
} // end FUNCTION nanmax()


// EXPORTS //

module.exports = nanmax;
