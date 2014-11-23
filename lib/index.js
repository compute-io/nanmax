/**
*
*	COMPUTE: nanmax
*
*
*	DESCRIPTION:
*		- Computes the maximum value of an array ignoring non-numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: nanmax( arr )
*	Computes the maximum value of an array ignoring any non-numeric values.
*
* @param {Array} arr - array of values
* @returns {Number} max value
*/
function nanmax( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'nanmax()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		max = null,
		val;

	for ( var i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( typeof val !== 'number' || val !== val ) {
			continue;
		}
		if ( max === null || val > max ) {
			max = val;
		}
	}
	return max;
} // end FUNCTION nanmax()


// EXPORTS //

module.exports = nanmax;
