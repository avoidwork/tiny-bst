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
