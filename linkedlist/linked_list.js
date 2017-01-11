function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToTail = function(value) {
   var newNode = new Node(value, null, this.tail);
   if (this.tail) this.tail.next = newNode; 
   else this.head = newNode;
   this.tail = newNode;
};

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

var myLL = new LinkedList();
myLL.addToTail(10);
console.log(myLL);


var ll = new LinkedList();