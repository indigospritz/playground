
var Stack = function() {
    this.count = 0;
    this.storage = [];

    // Adds a value onto the end of the Stack
    this.push = function(value) {
        this.storage[this.count] = value;
        // console.log(this.storage)
        // this.count++;
    }

    //Removes and returns the value at the end of the Stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    //Return the value at the end of the Stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.push('c');
// myStack.pop()
// myStack.pop();
// console.log(myStack.size());
// console.log(myStack.peek());
console.log(myStack.push('a'));
console.log(myStack.push('a'));
// console.log(myStack);