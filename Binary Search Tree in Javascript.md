### Algorithm in Javscript
- Binary Search Tree
Creating a tree, we need a node.
``` javascript
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
```
Creating a constructor for BST
``` javascript
function BST() {
    this.root = null
}
```
- Structure of a BST. For every node value in the left is smaller than the value of the node and value at the right is higher than the value of the root.

``` javascript
BST.prototype.push = function(val){
  var root = this.root;

  if(!root){
    this.root = new Node(val)
    return;
  }

  var currentNode = root;
  var newNode = new Node(val)

  while(currentNode){
    if(val < currentNode.value){
      currentNode.left = newNode
      break;
    } else {
      currentNode = currentNode.left
    }
  } else {
    if(!currentNode.right){
      currentNode.right = newNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
}
```
