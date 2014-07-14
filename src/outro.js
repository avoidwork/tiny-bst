// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = bst.factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return bst.factory;
	} );
}
else {
	global.bst = bst.factory;
}
} )( this );
