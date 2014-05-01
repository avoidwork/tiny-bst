/**
 * Tiny binary search tree for browser or server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-bst/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-bst
 * @module tiny-bst
 * @version 0.1.0
 */

( function ( global ) {

"use strict";

/**
 * Puts a tree in order
 *
 * @method ordered
 * @param  {Object} node  Node
 * @param  {Array}  order [Optional] Array of results
 * @return {Array}        Array of results
 */
function sort ( node, order ) {
	var output = order || [];

	if ( node !== null ) {
		output = sort( node.left, output );
		output.push( node.show () );
		output = sort( node.right, output );
	}

	return output;
}

/**
 * BST Node
 *
 * @constructor
 * @param {Mixed}  data  Data
 * @param {Object} left  {@link TinyBST}
 * @param {Object} right {@link TinyBST}
 */
function Node ( data, left, right ) {
	this.data  = data;
	this.left  = left;
	this.right = right;
}

/**
 * Shows Node data
 *
 * @memberOf Node
 * @method show
 * @return {Object} Data
 */
Node.prototype.show = function () {
	return this.data;
};

/**
 * TinyBST
 *
 * @constructor
 */
function TinyBST () {
	this.root = null;
}

/**
 * Inserts data into the tree
 *
 * @memberOf TinyBST
 * @param  {Number} data Hash
 * @return {Object} {@link TinyBST}
 */
TinyBST.prototype.insert = function ( data ) {
	var current, side, node, parent;

	if ( data === undefined ) {
		throw new Error( "Invalid arguments" );
	}

	node = new Node( data, null, null );

	if ( this.root === null ) {
		this.root = node;
	}
	else {
		current = this.root;

		while ( true ) {
			parent  = current;
			side    = data < current.data ? "left" : "right";
			current = current[side];

			if ( current === null ) {
				parent[side] = node;
				break;
			}
		}
	}

	return this;
};

/**
 * Puts the tree in numerical order
 *
 * @memberOf TinyBST
 * @method sort
 * @return {Array} Tree contents
 */
TinyBST.prototype.sort = function () {
	return sort( this.root );
};

/**
 * Puts the tree in reverse numerical order
 *
 * @memberOf TinyBST
 * @method reverse
 * @return {Array} Tree contents
 */
TinyBST.prototype.reverse = function () {
	return sort( this.root ).reverse();
};

/**
 * TinyBST factory
 *
 * @method factory
 * @return {Object} {@link TinyBST}
 */
function factory () {
	return new TinyBST();
}

// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return factory;
	} );
}
else {
	global.bst = factory;
}
} )( this );
