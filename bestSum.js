const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }
  memo[targetSum] = shortestCombination
  return shortestCombination
}

// const num = [1, 2, 4, 8, 16, 32, 64, 128]
// console.log(num.reduce(function(a, b) {
//   return a + b
// }));

console.log(bestSum(125, [1, 2, 4, 8, 16, 32, 64, 128]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(127, [1, 2, 5, 25]))