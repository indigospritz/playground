// // 30 days of code: day 10

// const convertToBinary = (num, binConversion, memo={}) => {
// const bestSum = (numtoConvert, binArr, memo = {}) => {
//     if (numtoConvert in memo) return memo[numtoConvert]
//     if (numtoConvert === 0) return []
//     if (numtoConvert < 0) return null
  
//     let shortestCombination = null
  
//     for (let num of binArr) {
//         console.log(num);
//       const remainder = numtoConvert - num
//       const remainderCombination = bestSum(remainder, binArr, memo)
//       console.log(remainderCombination);
//       if (remainderCombination !== null) {
//         const combination = [ ...remainderCombination, num ]
//         // console.log(combination)
//         if (shortestCombination === null || combination.length < shortestCombination.length) {
//           shortestCombination = combination
//         }
//       }
//     }
//     memo[numtoConvert] = shortestCombination.sort((a, b) => a - b)
//     return shortestCombination
//   }

// const x = [1, 2, 4, 8, 16, 32, 64, 128]
// console.log(bestSum(21, x));


// const binArr = [1, 2, 4, 8, 16, 32, 64, 128]

// console.log(convertToBinary(12, binArr));

const convert = (numToConvert, binaryArr) => {
    if (numToConvert === 0) return []
    if (numToConvert < 0) return null

     let bestCombination = null

    for (let num of binaryArr) {
        const remainder = numToConvert - num
        const remainderCombination = convert(remainder, binaryArr)
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ]
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination
            }
        }
    }
    return bestCombination
}

const binArr = [1, 2, 4, 8, 16, 32, 64, 128]
console.log(convert(21, binArr));
console.log(convert(14, binArr));

