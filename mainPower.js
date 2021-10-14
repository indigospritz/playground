// find the number (if input does not fit, find next) in which each number raise to the number.length == input number
const isValid = num => {
    const numArr = Array.from(String(num), Number)
    return numArr.reduce((acc, curr) => acc + (curr ** numArr.length), 0) === num
}

function findIsValid (count) {
    let foundValid = false
    let validNum
    while (!foundValid) {
        if (isValid(count)) {
            foundValid = true
            validNum = count
        } else {
            count++
        }
    }
    return validNum
}

console.log(findIsValid(123))