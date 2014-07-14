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
