function Numbers () {
    this.storage = []

    this.push = function(value) {
        this.storage[this.storage.length] = value    
        return this.storage
    }

    this.pop = function() {
        if (this.storage.length === 0) {
            return undefined
        }
        this.storage.splice(this.storage.length - 1, 1)
        return this.storage
    }

    this.shift = function () {
        this.storage.splice(0, 1)
        return this.storage
    }

    this.unshift = function (value) {
        this.storage.splice(0, 0, value)
        return this.storage
    }

    this.max = function () {
        let maxArr = this.storage[0]
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] > maxArr) {
                maxArr = this.storage[i]
            }
        }
        return maxArr
    }

    this.min = function () {
        let minArr = this.storage[0]
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] < minArr) {
                minArr = this.storage[i]
            }
        }
        return minArr
    }
}

const numbers = new Numbers()

console.log(numbers.push(-1))
console.log(numbers.push(-2))
console.log(numbers.push(-3))
// console.log(numbers.push(3))
// console.log(numbers.push(0))
// console.log(numbers.pop())
// console.log(numbers.pop())
// console.log(numbers.shift())
// console.log(numbers.unshift(5))
console.log(numbers.max())
console.log(numbers.min())
