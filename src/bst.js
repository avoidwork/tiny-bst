/**
 * @namespace bst
 */
var bst = {
	/**
	 * TinyBST factory
	 *
	 * @method factory
	 * @memberOf bst
	 * @return {Object} {@link TinyBST}
	 */
	factory: function () {
		return new TinyBST();
	},

	/**
	 * Removes a node from the tree
	 *
	 * @method removeNode
	 * @memberOf bst
	 * @param  {Object} node Node to remove
	 * @param  {Object} key  Key to remove
	 * @return {Mixed}       {@link Node}
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
	 * @memberOf bst
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
	 * @memberOf bst
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
	 * @memberOf bst
	 * @param  {Object}  node  Node
	 * @param  {Array}   order [Optional] Array of results
	 * @param  {Boolean} obj   [Optional] Return {@link Node} if `true`, default is `false`
	 * @return {Array}         Array of results
	 */
	sort : function ( node, order, obj ) {
		var output = order || [];

		if ( node !== null ) {
			output = bst.sort( node.left, output, obj );
			output.push( obj ? node : node.key );
			output = bst.sort( node.right, output, obj );
		}

		return output;
	}
};
