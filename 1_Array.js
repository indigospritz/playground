function Numbers () {
    this.count = 0
    this.storage = []

    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
        console.log(this.storage)
    }
    this.pop = function() {
        if (this.count === 0) {
            return undefined
        }
        this.count--
        let popResult = this.storage.splice(this.count, 1)
        delete this.storage[this.count]
        console.log(this.storage)
    }
    this.shift = function() {
        let arrIndexCount = this.count - 1
        for (arrIndexCount; arrIndexCount >= 0; arrIndexCount--) {
            if (arrIndexCount === 0) {
                let shiftArrStorage = this.storage[arrIndexCount]
                this.storage.splice(0, 1)
                console.log(this.storage)
            }
        }
    }
    this.unshift = function(value) {
        let arrIndexCount = this.count - 1
        for (arrIndexCount; arrIndexCount >= 0; arrIndexCount--) {
            if (arrIndexCount === 0) {
                let shiftArrStorage = this.storage[arrIndexCount]
                this.storage.splice(0, 0, value)
                console.log(this.storage)
            }
        }
    }
    this.min = function() {
        let minArr = this.storage
        let smallestNumber = false;
        for (let i = 0; i < minArr.length; i++) {
            if (minArr[0] < minArr[1]) {
                minArr.splice(0, 1, minArr)
                smallestNumber = true
                break
            }
        }
        if (!smallestNumber) {
            minArr.push()
        }
        console.log(minArr)
    }
    this.max = function() {
        let maxArr = this.storage[0]
        console.log(maxArr)
    }
}

const numbers = new Numbers()
numbers.push(6)     // [6]
numbers.push(2)     // [6, 2]
numbers.push(3)     // [6, 2, 3]
numbers.push(8)     // [6, 2, 3, 8]
numbers.pop()       // [6, 2, 3]
numbers.shift()     // [2, 3]
numbers.unshift(5)  // [5, 2, 3]
numbers.min()       // [3]
numbers.max()       // [5]
// console.log(numbers.count)  // 3
// console.log(numbers.storage) // [5, 2, 3]
