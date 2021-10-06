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

console.log(findIsValid(10))