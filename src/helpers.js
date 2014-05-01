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
