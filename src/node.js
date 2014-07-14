/**
 * TinyBST Node
 *
 * @constructor
 * @param {Mixed}  key   Node identifier
 * @param {Mixed}  data  [Optional] Data to set on Node
 * @param {Object} left  {@link TinyBST}
 * @param {Object} right {@link TinyBST}
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
