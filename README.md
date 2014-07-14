# Tiny Binary Search Tree

BST micro library for the browser or server. When loaded as a script, Tiny Binary Search Tree is available as 'bst()'.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-bst.svg)](http://travis-ci.org/avoidwork/tiny-bst)

## API

#### find()
Finds a Node in the BST

#### insert()
Adds a Node to the BST

#### remove()
Removes a Node from the BST

#### reverse()
Returns a reverse sorted Array of the BST

#### show()
Returns the `data` property of a Node

#### sort()
Returns a sorted Array of the BST

## Example
```javascript
var bst   = require("tiny-bst"),
    mybst = bst();

mybst.insert(3);
mybst.insert(24);
mybst.insert(1);
mybst.sort();    // [1, 3, 24]
mybst.reverse(); // [24, 3, 1]
mybst.find(3).left.data; // 1
mybst.remove(3);
mybst.root.data; // 24
mybst.root.left.show(); // 1
```
## License
Copyright (c) 2014 Jason Mulligan  
Licensed under the BSD-3 license.
