const findSumNumbers = (sum, arr) => {
    const tempArr = arr.slice()
    let tempSum = 0
    let tempFactor = []
    let checkSum = tempArr.slice().filter(x => x < sum)

    if (sum == 1 || sum == 2) {
        return tempArr.filter(x => x== sum)
    }

    for (let i = checkSum.length-1; i >= 0; i--) {
        tempSum += checkSum[i]
        if (tempSum < sum) {
            tempFactor.push(checkSum[i])
        } else if (tempSum == sum) {
            tempFactor.push(checkSum[i])
            break
        } else if (tempSum > sum) {
            tempFactor.push(checkSum[i-1])
            break
        }
    }
    return tempFactor.reverse()    
}

const numbers = [1, 2, 3]
console.log(findSumNumbers(1, numbers))
console.log(findSumNumbers(2, numbers))
console.log(findSumNumbers(3, numbers))
console.log(findSumNumbers(4, numbers))
console.log(findSumNumbers(5, numbers))
console.log(findSumNumbers(6, numbers))

// function getSums (num, arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (i === j) continue
  
//         const currI = arr[j]
//         const currJ = arr[i]
  
//         if (currI + currJ === num) {
//           return [currJ, currI]
//         }
//       }
//     }
//   }
// const numbers = [1, 2, 3]
// console.log(getSums(4, numbers))