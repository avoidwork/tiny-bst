var bst = require("../lib/tiny-bst");

exports["insert"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		var osort, ssort, tsort;

		test.expect(14);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");

		this.bst.insert(1);
		osort = this.bst.sort();
		test.strictEqual(osort.length, 1, "Should be '1'");
		test.strictEqual(osort[0], 1, "Should be '1'");

		this.bst.insert(10);
		ssort = this.bst.sort();
		test.strictEqual(ssort.length, 2, "Should be '2'");
		test.strictEqual(ssort[0], 1, "Should be '1'");
		test.strictEqual(ssort[1], 10, "Should be '10'");
		test.strictEqual(this.bst.reverse()[0], 10, "Should be '10'");

		this.bst.insert(9);
		tsort = this.bst.sort();
		test.strictEqual(tsort.length, 3, "Should be '3'");
		test.strictEqual(tsort[0], 1, "Should be '1'");
		test.strictEqual(tsort[1], 9, "Should be '9'");
		test.strictEqual(tsort[2], 10, "Should be '10'");
		test.strictEqual(this.bst.root.right.show(), 10, "Should be '10'");
		test.strictEqual(this.bst.find(1).right.show(), 10, "Should be '10'");
		test.strictEqual(this.bst.find(10).left.show(), 9, "Should be '9'");
		test.done();
	}
};

exports["remove"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		test.expect(5);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");
		this.bst.insert(1);
		this.bst.insert(10);
		this.bst.insert(9);
		test.strictEqual(this.bst.sort().length, 3, "Should be '3'");
		this.bst.remove(10);
		test.strictEqual(this.bst.sort().length, 2, "Should be '2'");
		test.strictEqual(this.bst.find(1).right.show(), 9, "Should be '9'");
		test.strictEqual(this.bst.root.right.show(), 9, "Should be '9'");
		test.done();
	}
};

exports["min"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		test.expect(3);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");
		this.bst.insert(1);
		this.bst.insert(10);
		this.bst.insert(9);
		test.strictEqual(this.bst.sort().length, 3, "Should be '3'");
		test.strictEqual(this.bst.min(), 1, "Should be '1'");
		test.done();
	}
};

exports["max"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		test.expect(3);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");
		this.bst.insert(1);
		this.bst.insert(10);
		this.bst.insert(9);
		test.strictEqual(this.bst.sort().length, 3, "Should be '3'");
		test.strictEqual(this.bst.max(), 10, "Should be '10'");
		test.done();
	}
};

exports["reverse"] = {
	setUp: function (done) {
		this.bst = bst();
		done();
	},
	tests: function (test) {
		test.expect(4);
		test.strictEqual(this.bst.sort().length, 0, "Should be '0'");
		this.bst.insert(1);
		this.bst.insert(10);
		this.bst.insert(9);
		test.strictEqual(this.bst.sort().length, 3, "Should be '3'");
		test.strictEqual(this.bst.sort()[0], 1, "Should be '1'");
		test.strictEqual(this.bst.reverse()[0], 10, "Should be '10'");
		test.done();
	}
};
