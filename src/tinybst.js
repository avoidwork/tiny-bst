/**
 * TinyBST
 *
 * @constructor
 */
function TinyBST () {
	this.root = null;
}

/**
 * Setting constructor loop
 *
 * @memberOf TinyBST
 * @type {Function}
 */
TinyBST.prototype.constructor = TinyBST;

/**
 * Finds a node based on it's key
 *
 * @method find
 * @memberOf TinyBST
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
 * @method insert
 * @memberOf TinyBST
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

	return node;
};

/**
 * Finds the maximum value in the tree
 *
 * @method max
 * @memberOf TinyBST
 * @return {Number} Node key
 */
TinyBST.prototype.max = function () {
	var node = bst.max( this.root );

	return node ? node.key : 0;
};

/**
 * Finds the minimum value in the tree
 *
 * @method min
 * @memberOf TinyBST
 * @return {Number} Node key
 */
TinyBST.prototype.min = function () {
	var node = bst.min( this.root );

	return node ? node.key : 0;
};

/**
 * Removes a node from the tree
 *
 * @method remove
 * @memberOf TinyBST
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
 * @method reverse
 * @memberOf TinyBST
 * @return {Array} Tree contents
 */
TinyBST.prototype.reverse = function () {
	return bst.sort( this.root ).reverse();
};

/**
 * Puts the tree in numerical order
 *
 * @method sort
 * @memberOf TinyBST
 * @param {Boolean} obj [Optional] Return {@link Node} if `true`, default is `false`
 * @return {Array} Tree contents
 */
TinyBST.prototype.sort = function ( obj ) {
	return bst.sort( this.root, undefined, ( obj === true ) );
};
