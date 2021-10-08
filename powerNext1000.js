const isNumValid = num => {
    let arrOfNum = Array.from(String(num), Number)
    let sum = 0
    for (let i = 0; i < arrOfNum.length; i++) {
        sum += arrOfNum[i]**arrOfNum.length;
    }
    if (num === sum) {
        return true
    } else {
        return false
    }
}

function findNextValid(numCount) {
    let foundValidNum = false
    let validNum
    while (!foundValidNum) {
        if (isNumValid(numCount)) {
            foundValidNum = true
            validNum = numCount
        } else {
            numCount++
        }
    }
    return validNum
}

console.log(findNextValid(123))
