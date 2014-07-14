/**
 * Removes a node from the tree
 *
 * @method removeNode
 * @param  {Object} node Node to remove
 * @param  {Object} key  Key to remove
 * @return {Mixed}       Node to substitute, or null
 */
function removeNode ( node, key ) {
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

		tmp        = min( node.right );
		node.key   = tmp.key;
		node.data  = tmp.data;
		node.right = removeNode( node.right, tmp.key );
	}
	else if ( key < node.key ) {
		node.left = removeNode( node.left, key );
	}
	else {
		node.right = removeNode( node.right, key );
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
		output.push( node.key );
		output = sort( node.right, output );
	}

	return output;
}
