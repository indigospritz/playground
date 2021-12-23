const pandigitalNum = 1406357289

const getSum = () => {
    let tempNum = ''
    let sum = 0
    divisibleBy = 2
    let indexCounter = 0
    const dNum = Array.from(String(pandigitalNum), Number)
    while (indexCounter < dNum.length - 1) {
        for (indexCounter, j = indexCounter + 3; indexCounter < j; indexCounter++) {
            tempNum += (dNum[indexCounter])
        }
        for (let i = divisibleBy; i < tempNum; i++) {
            if (tempNum % i == 0) {
                sum += tempNum
                break
            } else {
                divisibleBy += 1
            }
        }
        indexCounter -= 1
        console.log(indexCounter)
    }
    return tempNum
}

console.log(getSum())
console.log(pandigitalNum)