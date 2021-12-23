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
// const findSumNumbers = (sum, arr) => {
//     const tempArr = arr.slice()
//     let tempSum = 0
//     let tempFactor = []
//     let checkSum = tempArr.filter(x => x < sum)
//     for (let i = checkSum.length-1; i >= 0; i--) {
//         tempSum += checkSum[i]
//         if (tempSum < sum) {
//             tempFactor.push(checkSum[i])
//         } else if (tempSum == sum) {
//             tempFactor.push(checkSum[i])
//             break
//         } else if (tempSum > sum) {
//             tempFactor.push(checkSum[i-1])
//             break
//         }
//     }
//     console.log(tempFactor.reverse())
    
// }

// const numbers = [1, 2, 3]
// findSumNumbers(6, numbers)
// findSumNumbers(2, numbers)
// findSumNumbers(3, numbers)
// findSumNumbers(4, numbers)
// findSumNumbers(5, numbers)
// findSumNumbers(6, numbers)


// const multiplicationTable = n => {
//     if (n < 1 && n <= 20) {
//         return
//     }
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n*i}`);
//     }
// }
// multiplicationTable(7)

// const main = n => {
//     const arr = Array.from(String(n), Number).reverse()

//     return parseInt(arr.join(''))
// }

// console.log(main(1234))

// const ElementList = {}
// const addElement = (ElementList, element ) => {
//     let newList = Object.assign(ElementList, element)
//     return newList
// }
// console.log(ElementList);

const x = [13, 'but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours']
const sorted = x.sort((a, b) => a.length - b.length).toString().replace(/[\W0-9]/g, ' ')
const sortedWithReg = sorted.split('')
console.log(sorted);

// x.sort((a, b) => {
//     let xLength = a.length
//     let yLength = b.length
//     if (xLength === yLength) {
//         return a > b ? 1: -1
//     }
//     return xLength - yLength
// }).filter((str) => typeof str === 'String')

// const naturalNum = num => {
//     let remainder = new Set()
//     for (let i = 0; i < num.length; i++){
//         remainder.add(num[i]%42)
//     }
//     const result = [ ...remainder]
//     return result.length
// }
// const x = [42, 84, 252, 420, 840, 126, 42, 84, 420, 126]
// const y = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85]
// console.log(naturalNum(x))
// console.log(naturalNum(y))
// const naturalNum = num => {
//     const remainders = new Set(num.map(x => x % 42))
//     return Array.from(remainders).length
//   }
//   const x1 = [42, 84, 252, 420, 840, 126, 42, 84, 420, 126]
//   console.log(naturalNum(x1))
// console.log(naturalNum(y))