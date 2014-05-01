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
