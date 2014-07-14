/**
 * Binary Search Tree for browser or server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-bst/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-bst
 * @module tiny-bst
 * @version 1.1.1
 */

( function ( global ) {
"use strict";

/**
 * TinyBST Node
 *
 * @constructor
 * @param {Mixed}  key   Node identifier
 * @param {Mixed}  data  [Optional] Data to set on Node
 * @param {Object} left  {@link Node}
 * @param {Object} right {@link Node}
 */
function Node ( key, data ) {
	this.key   = key;
	this.data  = data || null;
	this.left  = null;
	this.right = null;
}

/**
 * Shows Node data or key
 *
 * @memberOf Node
 * @method show
 * @return {Mixed} Data or key
 */
Node.prototype.show = function () {
	return this.data || this.key;
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
 * Finds a node based on it's key
 *
 * @memberOf TinyBST
 * @method find
 * @param  {Mixed} key Node key
 * @return {Object}    Node that holds key
 */
TinyBST.prototype.find = function ( key ) {
	var current = this.root;

	while ( current.key !== key ) {
		if ( key < current.key ) {
			current = current.left;
		}
		else {
			current = current.right;
		}

		if ( current === null ) {
			return undefined;
		}
	}

	return current;
};

/**
 * Inserts key into the tree
 *
 * @memberOf TinyBST
 * @method insert
 * @param  {Mixed} key  Node key
 * @param  {Mixed} data [Optional] Node data
 * @return {Object}     {@link TinyBST}
 */
TinyBST.prototype.insert = function () {
	var key   = arguments[0],
	    data  = arguments[1] || null,
	    current, side, node, parent;

	if ( key === undefined ) {
		throw new Error( "Invalid arguments" );
	}

	node = new Node( key, data );

	if ( this.root === null ) {
		this.root = node;
	}
	else {
		current = this.root;

		while ( true ) {
			parent  = current;
			side    = key < current.key ? "left" : "right";
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
 * Finds the maximum value in the tree
 *
 * @memberOf TinyBST
 * @method max
 * @return {Number} Node key
 */
TinyBST.prototype.max = function () {
	return bst.max( this.root ).key;
};

/**
 * Finds the minimum value in the tree
 *
 * @memberOf TinyBST
 * @method min
 * @return {Number} Node key
 */
TinyBST.prototype.min = function () {
	return bst.min( this.root ).key;
};

/**
 * Removes a node from the tree
 *
 * @memberOf TinyBST
 * @method remove
 * @param  {Number} key Node key to remove
 * @return {Object} {@link TinyBST}
 */
TinyBST.prototype.remove = function ( key ) {
	bst.removeNode( this.root, key );

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
	return bst.sort( this.root ).reverse();
};

/**
 * Puts the tree in numerical order
 *
 * @memberOf TinyBST
 * @method sort
 * @return {Array} Tree contents
 */
TinyBST.prototype.sort = function () {
	return bst.sort( this.root );
};

/**
 * @namespace bst
 */
var bst = {
	/**
	 * TinyBST factory
	 *
	 * @method factory
	 * @return {Object} {@link TinyBST}
	 */
	factory: function () {
		return new TinyBST();
	},

	/**
	 * Removes a node from the tree
	 *
	 * @method removeNode
	 * @param  {Object} node Node to remove
	 * @param  {Object} key  Key to remove
	 * @return {Mixed}       Node to substitute, or null
	 */
	removeNode : function ( node, key ) {
		var tmp;

		if ( node === null ) {
			return null;
		}

		if ( key === node.key ) {
			if ( node.left === null && node.right === null ) {
				return null;
			}

			if ( node.left === null ) {
				return node.right;
			}

			if ( node.right === null ) {
				return node.left;
			}

			tmp        = bst.min( node.right );
			node.key   = tmp.key;
			node.data  = tmp.data;
			node.right = bst.removeNode( node.right, tmp.key );
		}
		else if ( key < node.key ) {
			node.left = bst.removeNode( node.left, key );
		}
		else {
			node.right = bst.removeNode( node.right, key );
		}

		return node;
	},

	/**
	 * Finds the max value under a node
	 *
	 * @method max
	 * @param  {Object} node Starting node
	 * @return {Object}      Child node with the max value
	 */
	max : function ( node ) {
		var current = node;

		while ( current.right !== null ) {
			current = current.right;
		}

		return current;
	},

	/**
	 * Finds the min value under a node
	 *
	 * @method min
	 * @param  {Object} node Starting node
	 * @return {Object}      Child node with the min value
	 */
	min : function ( node ) {
		var current = node;

		while ( current.left !== null ) {
			current = current.left;
		}

		return current;
	},

	/**
	 * Puts a tree in order
	 *
	 * @method sort
	 * @param  {Object} node  Node
	 * @param  {Array}  order [Optional] Array of results
	 * @return {Array}        Array of results
	 */
	sort : function ( node, order ) {
		var output = order || [];

		if ( node !== null ) {
			output = bst.sort( node.left, output );
			output.push( node.key );
			output = bst.sort( node.right, output );
		}

		return output;
	}
};

// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = bst.factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return bst.factory;
	} );
}
else {
	global.bst = bst.factory;
}
} )( this );
