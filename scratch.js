// // const modifyArray = (arr, callBack) => {
// //     arr.push(100)
// //     callBack()
// // }

// // let arr = [1,2,3,4,5]

// // modifyArray(arr, function() {
// //     console.log("array has been modified ", arr)
// // })

// const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
// console.log(trees)
// const series = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]

// const longestZeroSeq = arr => {
    // let zeroSeq = []
    // let tempArr = []
    // for (let i = 0; i < arr.length - 1; i++) {
    //     zeroSeq[i] = arr[i]
    // }
    // for (let i = 0; i < zeroSeq.length - 1; i++){
    //     if (zeroSeq[i] == 0) {
    //         tempArr.push(zeroSeq[i])
    //     } else {
    //         zeroSeq.map(x => x != 0)
    //     }
    // }
    // return tempArr


// const longestZeroSeq = arr => {
//     let prevCount = 0
//     let count = 0
//     let tempArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             count++
//         } else if (prevCount < count) {
//             prevCount = count
//             count = 0
//         }
//     }
//     for (let i = 0; i < prevCount; i++) {
//         tempArr.push(0)
//     }
//     // return arr.split('1').sort().pop().length
// }

// // const longestConsecutive = (arr, c="0") => {
// //     Math.max(...[...arr.macthAll(new RegExp(c+ "+", "g"))].map(e => e[0].length))
// // }
// const arr = [0, 0, 1, 0, 1, 1]
// const max = arr.reduce(function(a, b) {
//     return Math.max(a, b)
// }, 0)

// const series = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]

// const longestZeroSeq = arr => {
//     let count = 0
//     let result = 0
//     let tempArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != 0) {
//             count = 0
//         } else {
//             count++
//             result = Math.max(result, count)
//         }
//     }
//     for (let i = 0; i < result; i++) {
//         tempArr.push(0)
//     }
//     return tempArr   
    
// }

// console.log(longestZeroSeq(series)) 


// console.log(longestZeroSeq(series))
// console.log(series)
// console.log(max)
// console.log(getMax(series)) 
// longestConsecutive(series)

// var result_string = 'a,b,c,d|1,2,3,4',
//         result = result_string.split("|"),
//         alpha = result[0],
//         count = result[1],
//         count_array = count.split(",");
//     for(var i=0; i<count_array.length;i++) count_array[i] = count_array[i];
//     return (count_array[0]+count_array[1]+count_array[2]+count_array[3]);
// const pandigitalNum = 1406357289

// const getSum = () => {
//     let tempNum = ''
//     let counter = 9
//     let limit = 9
//     let sum = 0
//     const dNum = Array.from(String(pandigitalNum), Number)
//     for (let i = 0; i < dNum.length; i++) {
//         for (let j = i; j <= 1; j++){
//             tempNum += dNum.splice(0, 1)
//             sum += tempNum
//         }
//         limit++
//     }
//     console.log(parseInt(sum))
// }

// getSum()
// console.log(pandigitalNum)

// function Person (name,age, gender, runner) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.runner = runner
// }

// const stud1 = new Person('todd', 31, 'male', true)
// const stud2 = new Person('carly', 21, 'female', false)
// console.log(stud1, stud2);

// const myArray = [1, 2, 3, 4, 5]
// const mySet = new Set(myArray)


// console.log(mySet.size);

// sort
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const sortAges = ages.sort((a, b) => a - b)

// reduce brute force

// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }

// reduce
const ageSum = ages.reduce((total, age) => total + age, 0)

console.log(ageSum)

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ]

const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start)
}, 0)
console.log(totalYears);