# Tiny Binary Search Tree

BST micro library for the browser or server. When loaded as a script, Tiny Binary Search Tree is available as 'bst()'.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-bst.png)](http://travis-ci.org/avoidwork/tiny-bst)

## API
#### insert
Adds to the tree

#### reverse
Sorts the contents of the tree and returns an Array

#### sort
Reverse sorts the contents of the tree and returns an Array

## Example
```
var bst   = require("tiny-bst"),
    mybst = bst();

mybst.insert(3);
mybst.insert(24);
mybst.insert(1);
mybst.sort();    // [1, 3, 24]
mybst.reverse(); // [24, 3, 1]
```
