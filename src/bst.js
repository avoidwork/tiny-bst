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
