# Tiny Binary Search Tree

BST micro library for the browser or server. When loaded as a script, Tiny Binary Search Tree is available as 'bst()'.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-bst.svg)](http://travis-ci.org/avoidwork/tiny-bst)

## API

#### find(key)
Finds a Node in the BST

#### insert(key[, data])
Adds a Node to the BST

#### remove(key)
Removes a Node from the BST

#### reverse()
Returns a reverse sorted Array of the BST

#### show()
Returns the `data` property of a Node if set, otherwise `key`

#### sort([node])
Returns a sorted Array of the BST, accepts an optional Boolean to return the Nodes instead of the `key`

## Examples
#### Pointers
```javascript
var bst   = require("tiny-bst"),
    mybst = bst();

mybst.insert(3);
mybst.insert(24);
mybst.insert(1);
mybst.sort();    // [1, 3, 24]
mybst.reverse(); // [24, 3, 1]
mybst.find(3).left.show(); // 1
mybst.remove(3);
mybst.root.show(); // 24
mybst.root.left.show(); // 1
```

#### Data
```javascript
var bst   = require("tiny-bst"),
    mybst = bst();

mybst.insert(3, {abc: true});
mybst.insert(24, {abc: false});
mybst.insert(1, {abc: true});
mybst.sort();    // [1, 3, 24]
mybst.reverse(); // [24, 3, 1]
mybst.find(3).left.show(); // {abc: true}
mybst.remove(3);
mybst.root.show(); // {abc: false}
mybst.root.left.show();  // {abc: true}
```

## License
Copyright (c) 2014 Jason Mulligan  
Licensed under the BSD-3 license.
