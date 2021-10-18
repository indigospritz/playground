// let Book = new Object()
// Book.title = "OOP in JavaScript"
// Book.price = 15.99
// Book.author = "Clever Techie"
// Book.getInfo = function() {
//     return Book.title + " - " + Book.author
// }


// construction function
//  function Book(title) {
//     this.title = title
//     this.author = ['Azra Bertnand', 'Seren Bertnand']
//     this.description = 'Rediscover the lost ancient mystery teaching of the Cosmic Womb'
//     this.price = 21.99

//     // method: external function
//     this.getInfo = getBookInfo
// }

// function getBookInfo() {
//     return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author
// }
// let human = {
//     eye: 'blue',
//     hair: 'brown',
//     height: '180cm',
//     name: 'John',
//     lname: 'Doe',
//     fname: function() {
//         return this.name + " " + this.lname
//     }
// }
// human.weight = '200lbs'

// console.log(human.fname())
// console.log(Book.getInfo())
// const bubbleSort = arr => {
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 1; j < arr.length-i; j++) {
//             if (arr[j-1] > arr[j]) {
//                 [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([2, 3, 1, 12, 24, 1, 4, 8]))

// const quickSort = array => {
//     if (array.length <= 1) {
//         return array
//     }
//     const pivot = array[array.length - 1]
//     const leftArr = []
//     const rightArr = []
//     for (const el of array.slice(0, array.length - 1)) {
//         el < pivot ? leftArr.push(el) : rightArr.push(el)
//     }
//     return [...quickSort(leftArr), pivot, ... quickSort(rightArr)]
// }
// console.log(quickSort([2, 3, 23, 42, 1, 12, 24, 1, 4, 8]))

// const factorial = num => {
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))
// let start = 0
// let end = 0
// start = performance.now()
// factorial(5)
// end = performance.now()
// end - start
const findSumNumbers = (sum, arr) => {
    const temp = arr.slice()
    let res = 0
    let resArr = []
    for (let i = 0; i < temp.length; i++) {
        res += temp[i]
        if (res + temp[i] < sum) {
            resArr.push(temp[i])
        }
    }
    console.log(resArr)
}

const numbers = [1, 2, 3]
findSumNumbers(5, numbers)
// findSumNumbers(2, numbers)
// findSumNumbers(3, numbers)
// findSumNumbers(4, numbers)
// findSumNumbers(5, numbers)
// findSumNumbers(6, numbers)
