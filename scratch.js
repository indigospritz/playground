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
const pandigitalNum = 1406357289

const getSum = () => {
    let tempNum = ''
    let counter = 9
    let limit = 9
    let sum = 0
    const dNum = Array.from(String(pandigitalNum), Number)
    for (let i = 0; i < dNum.length; i++) {
        for (let j = i; j <= 1; j++){
            tempNum += dNum.splice(0, 1)
            sum += tempNum
        }
        limit++
    }
    console.log(parseInt(sum))
}

getSum()
// console.log(pandigitalNum)