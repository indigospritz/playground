// const binConv = arr => {
//     console.log(arr.toString(2).split('0').map(function (el){return el.length}).reduce(function (a, b) {
//         return (a > b ? a : b)
//     }))
// }
// binConv(25)

// // console.log(temp.toString(2).split('0').map(function (el) {return el.length}).reduce(function (a, b) {return (a > b ? a: b)}))

const aVeryBigSum = ar => {
    console.log(ar.reduce((a, b) => a + b))
}

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(arr)