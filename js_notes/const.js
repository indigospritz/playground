const myObject = {name : 'christian'};
myObject.name = 'delmonte';
// console.log(myObject.name)
// console.log(myObject.name)

var Arr = function() {
    this.count = 0;
    this.storage = [];
    this.collection = this.count[this.storage];

    this.peek = function() {
        return this.storage[this.count-1];
    }
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    this.values = function() {
        return this.collection;
    }
    // this.pop = function() {
    //     if (this.count === 0) {
    //         return undefined;
    //     }
    //     this.count--;
    //     var result = this.storage[this.count];
    //     delete this.storage[this.count];
    //     return result;
    // }
}

var newArr = new Arr();
newArr.push('a');
newArr.push('b');
newArr.push('c');

console.log(myObject)
console.log(newArr.storage);
