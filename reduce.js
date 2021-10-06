const numbers = [1,2,4,10]

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
console.log(summedNums)

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator)
  console.log('The value of currentValue: ', currentValue)
  return accumulator + currentValue
}, 10)
console.log(newSum)

