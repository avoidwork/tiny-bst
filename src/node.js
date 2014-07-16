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
 * Setting constructor loop
 *
 * @memberOf Node
 * @type {Function}
 */
Node.prototype.constructor = Node;

/**
 * Shows Node data or key
 *
 * @method show
 * @memberOf Node
 * @return {Mixed} Data or key
 */
Node.prototype.show = function () {
	return this.data || this.key;
};
