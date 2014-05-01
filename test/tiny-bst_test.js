var bst = require("../lib/tiny-bst");

exports["all"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		test.expect(7);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");
		this.bst.insert(1);
		test.strictEqual(this.bst.sort().length, 1, "Should be '1'");
		test.strictEqual(this.bst.sort()[0], 1, "Should be '1'");
		this.bst.insert(10);
		test.strictEqual(this.bst.sort().length, 2, "Should be '2'");
		test.strictEqual(this.bst.sort()[0], 1, "Should be '1'");
		test.strictEqual(this.bst.sort()[1], 10, "Should be '10'");
		test.strictEqual(this.bst.reverse()[0], 10, "Should be '10'");
		test.done();
	}
};
