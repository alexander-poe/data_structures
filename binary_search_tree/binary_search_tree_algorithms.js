
var BinarySearchTree = function(key, value, parent) {
    this.key = key || null;
    this.value = value || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
};
var newTree = new BinarySearchTree(1, 'hi', 'myBinarySearchTree')
BinarySearchTree.prototype.insert = function(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }
    else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        else {
            this.left.insert(key, value);
        }
    }
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
};
BinarySearchTree.prototype.get = function(key) {
    if (this.key == key) {
        return this.value;
    }
    else if (key < this.key && this.left) {
        return this.left.get(key);
    }
    else if (key > this.key && this.right) {
        return this.right.get(key);
    }
    else {
        throw new Error('Key Error');
    }
};
BinarySearchTree.prototype.remove = function(key) {
    if (this.key == key) {
        if (this.left && this.right) {
            var successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        else if (this.left) {
            this._replaceWith(this.left);
        }
        else if (this.right) {
            this._replaceWith(this.right);
        }
        else {
            this._replaceWith(null);
        }
    }
    else if (key < this.key && this.left) {
        this.left.remove(key);
    }
    else if (key > this.key && this.right) {
        this.right.remove(key);
    }
    else {
        throw new Error('Key Error');
    }
};
BinarySearchTree.prototype._replaceWith = function(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }
};
BinarySearchTree.prototype._findMin = function() {
    if (!this.left) {
      console.log(this.left)
        return this;
    }
    console.log(this.left)
    return this.left._findMin();
};
newTree.insert(1, 'helldo')
newTree.insert(2, 'apples')
newTree.insert(3, 'oranges')
newTree.insert(4, 'bananas')
newTree.insert(5, 'kantanas')
newTree.insert(6, 'forfantas')
newTree.insert(7, 'nice hannah')
newTree.insert(34, 'kantanas')
newTree.insert(236, 'forfantas')
newTree.insert(435, 'nice hannah')
newTree.insert(123231, 'ohyeah');
newTree.insert(2, 'cool');
newTree.insert(1, 'ok');


//https://repl.it/FFRl/56

//HEIGHT (WORKS)
// function binaryHeight2 (node) {
//     if (!node) return 0;
//     var rightHeight = binaryHeight2(node.right);
//     return 1 + Math.max(rightHeight);
// }
// console.log(binaryHeight2(newTree));

//GET LARGEST (WORKS)
// function getLargest(tree) {
//   if (tree.right) {
//     return getLargest(tree.right);
//   } else {
//     return tree.key;
//   }
// }
// console.log(getLargest(newTree))


//console.log(extarr[extarr.length-1])



//FIND DEPTH USING TENERARY (WORKS)
//if node.left is true, recurse and add to the depth, 
//do same with right nodes then add those values 
// function nodeHeight(node, depth = 0) {
//   let leftHeight = node.left ? nodeHeight(node.left, depth + 1) : 0;
//   let rightHeight = node.right ? nodeHeight(node.right, depth + 1) : 0;
//   return Math.max(leftHeight, rightHeight, depth);
// }

//nodeHeight(newTree);

//--------------------
// FINDS 3RD GREATEST KEY FROM BST (WORKS)
// function find3rdGreatest(obj) {
//   var array       = [];
//   function thirdGreatest(obj) {
//   if (obj.left) {
//     array.push(obj.key)
//     thirdGreatest(obj.left)
//   }
//   if (obj.right) {
//     array.push(obj.key)
//     thirdGreatest(obj.right); 
//   }
//   }
//   var sortedarray = array.sort(function (a, b) {
//     return a - b;
//   });
//   thirdGreatest(newTree);
//   return '3rd greatest is ' + sortedarray[sortedarray.length - 2]
// }

// find3rdGreatest(newTree);

// FIND DEPTH (WORKS)
// function find_depth(tree, depth) {
//   if (!depth) {
//     depth = 0;
//   }
//   depth++;
//   if (tree.right) {
//     find_depth(tree.right, depth);
//   }
//   if (tree.left) {
//     find_depth(tree.left, depth);
//   }
//   console.log(depth)
// }

// find_depth(newTree)
//---------------------
// !PRINTS BINARY TREE (WORKS)
// function print(tree, depth) {
// 	if (!depth) {
// 		depth = 0;
// 	}
// 	depth += 1;
// 	if (tree.left) {
// 		console.log("left:" + tree.left.key);
// 		print(tree.left, depth);
// 	}
// 	if (tree.right) {
// 		console.log("       right:" + tree.right.key);
// 		print(tree.right, depth);
// 	}
// }

// print(newTree)
//----------------------
// !FINDS SIZE && WORKS
// function find_size(tree) {
//   if (tree === null) return 0;
//   return 1 + find_size(tree.left) + find_size(tree.right);
// }

// console.log('find_size ',find_size(newTree))
//------------------------------
// !RECURSES THROUGH BINARY TREE (WORKS)
// function recurseThroughABinaryTree(obj) {
// console.log(obj)
// if (obj.left) {
//   console.log('LEFT', obj.left)
//     recurseThroughABinaryTree(obj.left)
//   }
//   if (obj.right) {
//     console.log('RIGHT', obj.right)
//     recurseThroughABinaryTree(obj.right); 
//   }
// }
//------------------------------
// !CHECK IF IS BINARY TREE (BULKY SOLUTION)
// var trueOrFalseReport = {}
// function isbtree(obj) {
//     if (obj.left) {
//         isbtree(obj.left);
//     }
//     if (obj.right) {
//       isbtree(obj.right);
//     }
//     if (obj.right === null && obj.left === null && 'right' in obj && 'left' in obj && 'key' in obj && 'parent' in obj) {
//       trueOrFalseReport.right  = "has right pointer";
//       trueOrFalseReport.left   = "has left pointer";
//       trueOrFalseReport.key    = "has key";
//       trueOrFalseReport.parent = "has parent"
//     }
//     if (obj.left && obj.right) {
//     if (obj.left.key > obj.right.key) {
//       return false;
//     } else {
//       trueOrFalseReport.leftlowerthenright = "right and left values properly assigned"
//       trueOrFalseReport.result = "is a binary tree = true;
//     }
//     }
//     return trueOrFalseReport;
    
// }

// isbtree(newTree);


//has a key, value, parent, left and right
//the lower value should always be on the left 
//if key less then assigned to the left


// var BinarySearchTree = function(key, value, parent) {
//     this.key = key || null;
//     this.value = value || null;
//     this.parent = parent || null;
//     this.left = null;
//     this.right = null;
// };

// var newTree = new BinarySearchTree(1, 'hi')


// BinarySearchTree.prototype.insert = function(key, value) {
//     if (this.key == null) {
//         this.key = key;
//         this.value = value;
//     }
//     else if (key < this.key) {
//         if (this.left == null) {
//             this.left = new BinarySearchTree(key, value, this);
//         }
//         else {
//             this.left.insert(key, value);
//         }
//     }
//     else {
//         if (this.right == null) {
//             this.right = new BinarySearchTree(key, value, this);
//         }
//         else {
//             this.right.insert(key, value);
//         }
//     }
// };

// BinarySearchTree.prototype.get = function(key) {
//     if (this.key == key) {
//         return this.value;
//     }
//     else if (key < this.key && this.left) {
//         return this.left.get(key);
//     }
//     else if (key > this.key && this.right) {
//         return this.right.get(key);
//     }
//     else {
//         throw new Error('Key Error');
//     }
// };

// BinarySearchTree.prototype.remove = function(key) {
//     if (this.key == key) {
//         if (this.left && this.right) {
//             var successor = this.right._findMin();
//             this.key = successor.key;
//             this.value = successor.value;
//             successor.remove(successor.key);
//         }
//         else if (this.left) {
//             this._replaceWith(this.left);
//         }
//         else if (this.right) {
//             this._replaceWith(this.right);
//         }
//         else {
//             this._replaceWith(null);
//         }
//     }
//     else if (key < this.key && this.left) {
//         this.left.remove(key);
//     }
//     else if (key > this.key && this.right) {
//         this.right.remove(key);
//     }
//     else {
//         throw new Error('Key Error');
//     }
// };

// BinarySearchTree.prototype._replaceWith = function(node) {
//     if (this.parent) {
//         if (this == this.parent.left) {
//             this.parent.left = node;
//         }
//         else if (this == this.parent.right) {
//             this.parent.right = node;
//         }

//         if (node) {
//             node.parent = this.parent;
//         }
//     }
//     else {
//         if (node) {
//             this.key = node.key;
//             this.value = node.value;
//             this.left = node.left;
//             this.right = node.right;
//         }
//         else {
//             this.key = null;
//             this.value = null;
//             this.left = null;
//             this.right = null;
//         }
//     }
// };

// BinarySearchTree.prototype._findMin = function() {
//     if (!this.left) {
//       console.log(this.left)
//         return this;
//     }
//     console.log(this.left)
//     return this.left._findMin();
// };


// function print_tree(tree, depth) {
//     if (!depth) {
//         console.log("" + tree.key);
//         depth = 0;
//     }
//     depth += 1;
//     if (tree.left) {
//         console.log(" ".repeat(depth) + "<" + tree.left.key);
//         print_tree(tree.left, depth);
//     }
//     if (tree.right) {
//         console.log(" ".repeat(depth) + ">" + tree.right.key);
//         print_tree(tree.right, depth);
//     }
// }

// //Write an algorithm to check whether an arbitrary tree is a binary search tree
// function is_bst(tree) {
//     //This is a bit sloppy; a non-binary tree won't have "left" and "right"
//     //attributes, yet we attempt to prove that it is indeed binary. Whatever.
//     if (tree.children > 2) return false;
//     if (tree.left) {
//         if (tree.left.key > tree.key) return false;
//         if (!is_bst(tree.left)) return false;
//     }
//     if (tree.right) {
//         if (tree.right.key < tree.key) return false;
//         if (!is_bst(tree.right)) return false;
//     }
//     return true;
// }


////ROSUAV'S version
// //More strict version of the above: a tree must have all its keys within bounds
// //(either bound may be 'undefined' if there is no such bound).
// //Assumes you're working with a binary tree, because let's face it, it makes
// //no sense to ask if an integer is a BST.
// function is_bst(tree, minimum, maximum) {
//     if (minimum !== undefined && tree.key < minimum) return false;
//     if (maximum !== undefined && tree.key > maximum) return false;
//     if (tree.left  && !is_bst(tree.left , minimum, tree.key)) return false;
//     if (tree.right && !is_bst(tree.right, tree.key, maximum)) return false;
//     return true;
// }

// //Write an algorithm to find the height of a binary search tree
// function bst_height(tree) {
//     return Math.max(tree.left && bst_height(tree.left),
//         tree.right && bst_height(tree.right)) + 1;
// }

// //Write an algorithm to find the third largest value in a binary search tree
// //CJA 20160822: Assuming that this means the third largest *key*.

// function nth_largest(tree, state) {
//     //Finding the largest node means traversing the right first.
//     //Normally, you'll traverse a tree left-to-right.
//     if (tree.right) {
//         nth_largest(tree.right, state);
//         if (state.result) return;
//     }
//     if (!--state.n) {
//         //Found it.
//         state.result = tree.key;
//         return;
//     }
//     if (tree.left) nth_largest(tree.left, state);
// }

// function third_largest(tree) {
//     //Special case: empty tree.
//     if (tree.key == null) return null;
//     var state = {n: 3, result: null};
//     nth_largest(tree, state);
//     return state.result;
// }


// newTree.insert(8, 'helldo')
// newTree.insert(87, 'apples')
// newTree.insert(44, 'oranges')
// newTree.insert(5, 'bananas')
// newTree.insert(4, 'kantanas')
// newTree.insert(3, 'forfantas')
// newTree.insert(2, 'nice hannah')

// console.log(newTree)
// third_largest(newTree)




