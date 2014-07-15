# Change Log

## 1.1.2
- Changed `insert()` to return the new `Node`

## 1.1.1
- Changed `find()` to return `undefined` if no match is found
- Reshaped the internal module structure

## 1.1.0
- Added `key` property to `Node` instances
- Refactored `insert()` to accept an optional second argument for the `Node.data` value, otherwise `Node.key` is assigned
- Refactored `show()` to return `Node.data` else `Node.key`

## 1.0.0
- Added `find()`, `remove()`, `min()`, & `max()` to `TinyBST.prototype`
- Added unit tests, & extended existing ones

## 0.1.0
- Initial commit of code; `insert()`, & `sort()` only
