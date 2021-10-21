// // Grid Traveler
// const gridTraveler = (m, n, memo={}) => {
//     const key = m + ',' + n

//     if (key in memo) return memo[key]
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0

//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//     return memo[key]
// }

// console.log(gridTraveler(1, 1))
// console.log(gridTraveler(2, 3))
// console.log(gridTraveler(3, 2))
// console.log(gridTraveler(3, 3))
// console.log(gridTraveler(18, 18))


// CanSum
// const canSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return true
//     if (targetSum < 0) return false

//     for (let num of numbers) {
//         const remainder = targetSum - num
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true
//             return true
//         }
//     }
//     memo[targetSum] = false
//     return false
// }

// console.log(canSum(7, [2, 3, 5 ,7]))
// console.log(canSum(7, [5, 3, 7, 7]))
// console.log(canSum(8, [2, 3, 5]))
// console.log(canSum(31, [7, 14]))

// Measure function execution time
// const { performance } = require('perf_hooks')
// let start = performance.now()
// let end = performance.now()
// console.log(`${end - start}`);

// HowSum
// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     for (let num of numbers) {
//         const remainder = targetSum - num
//         const remainderResult = howSum(remainder, numbers, memo)
//         if (remainderResult !== null) {
//             memo[targetSum] = [...remainderResult, num]
//             return memo[targetSum]
//         }
//     }
//     memo[targetSum] = null
//     return null
// }

// console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(7, [2, 3]))
// console.log(howSum(7, [2, 4]))
// console.log(howSum(300, [7, 14]))

// BestSum
// const bestSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     let shortestCombination = null

//     for (let num of numbers) {
//         const remainder = targetSum - num
//         const remainderCombination = bestSum(remainder, numbers, memo)
//         if (remainderCombination !== null) {
//             const combination = [ ...remainderCombination, num ]
//             if (shortestCombination === null || combination.length < shortestCombination.length) {
//                 shortestCombination = combination
//             }
//         }
//     }
//     memo[targetSum] = shortestCombination
//     return shortestCombination
// }
// console.log(bestSum(7, [5, 3, 4, 7]))
// console.log(bestSum(127, [1, 2, 5, 25]))

// CanCosntruct
const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true
    }
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank) === true) {
                return true
            }
        }
    }
    return false
}

console.log(canConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'abcd']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']))