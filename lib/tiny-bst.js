/**
 * Binary Search Tree for browser or server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-bst/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-bst
 * @module tiny-bst
 * @version 1.0.0
 */

( function ( global ) {
"use strict";

/**
 * Removes a node from the tree
 *
 * @method removeNode
 * @param  {Object} node Node to remove
 * @param  {Object} data Data to remove
 * @return {Mixed}       Node to substitute, or null
 */
function removeNode ( node, data ) {
	var tmp;

	if ( node === null ) {
		return null;
	}

	if ( data === node.data ) {
		if ( node.left === null && node.right === null ) {
			return null;
		}

		if ( node.left === null ) {
			return node.right;
		}

		if ( node.right === null ) {
			return node.left;
		}

		tmp        = min( node.right );
		node.data  = tmp.data;
		node.right = removeNode( node.right, tmp.data );
	}
	else if ( data < node.data ) {
		node.left = removeNode( node.left, data );
	}
	else {
		node.right = removeNode( node.right, data );
	}

	return node;
}

/**
 * Finds the max value under a node
 *
 * @method max
 * @param  {Object} node Starting node
 * @return {Object}      Child node with the max value
 */
function max ( node ) {
	var current = node;

	while ( current.right !== null ) {
		current = current.right;
	}

	return current;
}

/**
 * Finds the min value under a node
 *
 * @method min
 * @param  {Object} node Starting node
 * @return {Object}      Child node with the min value
 */
function min ( node ) {
	var current = node;

	while ( current.left !== null ) {
		current = current.left;
	}

	return current;
}

/**
 * Puts a tree in order
 *
 * @method sort
 * @param  {Object} node  Node
 * @param  {Array}  order [Optional] Array of results
 * @return {Array}        Array of results
 */
function sort ( node, order ) {
	var output = order || [];

	if ( node !== null ) {
		output = sort( node.left, output );
		output.push( node.show() );
		output = sort( node.right, output );
	}

	return output;
}

/**
 * TinyBST Node
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
 * Finds a node based on it's data
 *
 * @memberOf TinyBST
 * @method find
 * @param  {Number} data Node data
 * @return {Object}      Node that holds data
 */
TinyBST.prototype.find = function ( data ) {
	var current = this.root;

	while ( current.data !== data ) {
		if ( data < current.data ) {
			current = current.left;
		}
		else {
			current = current.right;
		}

		if ( current === null ) {
			return null;
		}
	}

	return current;
};

/**
 * Inserts data into the tree
 *
 * @memberOf TinyBST
 * @method insert
 * @param  {Number} data Node data
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
 * Finds the minimum value in the tree
 *
 * @memberOf TinyBST
 * @method min
 * @return {Number} Node data
 */
TinyBST.prototype.min = function () {
	return min( this.root ).data;
};

/**
 * Finds the maximum value in the tree
 *
 * @memberOf TinyBST
 * @method max
 * @return {Number} Node data
 */
TinyBST.prototype.max = function () {
	return max( this.root ).data;
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
 * Removes a node from the tree
 *
 * @memberOf TinyBST
 * @method remove
 * @param  {Number} data Node data to remove
 * @return {Object} {@link TinyBST}
 */
TinyBST.prototype.remove = function ( data ) {
	removeNode( this.root, data );

	return this;
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
